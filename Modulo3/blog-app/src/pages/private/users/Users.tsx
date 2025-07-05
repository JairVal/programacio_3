// src/pages/private/Users.tsx
import { useState, useEffect, type JSX } from "react";
import {
    Box, Typography, TextField, IconButton, Button,
    List, ListItem, ListItemText, ListItemSecondaryAction
} from "@mui/material";
import { Search, Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import UserFormDialog from "./UserFormDialog"; // asegúrate que esta ruta es correcta

interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export default function Users(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState("");
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<User | null>(null);

    const fetchUsers = async (): Promise<void> => {
        try {
            const res = await axios.get("https://nestjs-blog-backend-api.desarrollo-software.xyz/users?page=1&limit=10&isActive=true");
            setUsers(res.data.data.items);
        } catch (error) {
            console.error("Error al obtener usuarios", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filtered = users.filter((u) =>
        u.username.toLowerCase().includes(filter.toLowerCase())
    );

    const remove = async (id: string): Promise<void> => {
        if (confirm("¿Eliminar este usuario?")) {
            await axios.delete(`https://nestjs-blog-backend-api.desarrollo-software.xyz/users/${id}`);
            fetchUsers();
        }
    };

    const openNew = (): void => {
        setEditing(null);
        setOpen(true);
    };

    const openEdit = (user: User): void => {
        setEditing(user);
        setOpen(true);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Usuarios</Typography>

            <Box display="flex" gap={2} alignItems="center" mb={2}>
                <TextField
                    placeholder="Buscar..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    InputProps={{ endAdornment: <Search /> }}
                />
                <Button variant="contained" onClick={openNew}>Nuevo usuario</Button>
            </Box>

            <List>
                {filtered.map((u) => (
                    <ListItem key={u.id}>
                        <ListItemText primary={u.username} secondary={u.email} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => openEdit(u)}><Edit /></IconButton>
                            <IconButton onClick={() => remove(u.id)}><Delete /></IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            <UserFormDialog
                open={open}
                onClose={() => setOpen(false)}
                onSaved={fetchUsers}
                user={editing}
            />
        </Box>
    );
}
