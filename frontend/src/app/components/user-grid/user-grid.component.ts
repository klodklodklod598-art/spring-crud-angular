import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  rowData: User[] = [];
  selectedUser: User | null = null;
  isDialogOpen = false;
  editingUser: User | null = null;

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, sortable: true, filter: true },
    { field: 'name', headerName: 'Name', width: 150, sortable: true, filter: true, editable: true },
    { field: 'email', headerName: 'Email', width: 220, sortable: true, filter: true, editable: true },
    { field: 'phone', headerName: 'Phone', width: 150, sortable: true, filter: true, editable: true },
    { field: 'address', headerName: 'Address', width: 200, sortable: true, filter: true, editable: true },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      sortable: true,
      filter: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['ACTIVE', 'INACTIVE', 'PENDING']
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      cellRenderer: this.actionCellRenderer.bind(this),
      cellRendererParams: {
        onEdit: this.onEditClick.bind(this),
        onDelete: this.onDeleteClick.bind(this)
      }
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    filter: true,
    sortable: true,
    flex: 1
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.rowData = users;
      },
      error: (err) => {
        console.error('Error loading users:', err);
      }
    });
  }

  actionCellRenderer(params: any) {
    const onEdit = params.onEdit;
    const onDelete = params.onDelete;
    const rowId = params.data.id;

    return `
      <button class="btn-edit" data-action="edit" data-id="${rowId}">Edit</button>
      <button class="btn-delete" data-action="delete" data-id="${rowId}">Delete</button>
    `;
  }

  onEditClick(id: number) {
    const user = this.rowData.find(u => u.id === id);
    if (user) {
      this.editingUser = { ...user };
      this.isDialogOpen = true;
    }
  }

  onDeleteClick(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        }
      });
    }
  }

  onCreate() {
    this.editingUser = {
      name: '',
      email: '',
      phone: '',
      address: '',
      status: 'ACTIVE'
    };
    this.isDialogOpen = true;
  }

  onSave() {
    if (this.editingUser) {
      if (this.editingUser.id) {
        this.userService.updateUser(this.editingUser.id, this.editingUser).subscribe({
          next: () => {
            this.loadUsers();
            this.closeDialog();
          },
          error: (err) => {
            console.error('Error updating user:', err);
          }
        });
      } else {
        this.userService.createUser(this.editingUser).subscribe({
          next: () => {
            this.loadUsers();
            this.closeDialog();
          },
          error: (err) => {
            console.error('Error creating user:', err);
          }
        });
      }
    }
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.editingUser = null;
  }

  onCellClicked(params: any) {
    if (params.event.target.tagName === 'BUTTON') {
      const action = params.event.target.getAttribute('data-action');
      const id = Number(params.event.target.getAttribute('data-id'));

      if (action === 'edit') {
        this.onEditClick(id);
      } else if (action === 'delete') {
        this.onDeleteClick(id);
      }
    }
  }
}
