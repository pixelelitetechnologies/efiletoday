import * as React from "react";
import AdminLayout from "../../components/AdminLayout";
import {Grid, IconButton, Menu, MenuItem, Pagination, Paper, TextField, Typography} from "@mui/material";
import {MoreVertical} from "react-feather";

const efileApplications = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const close = () => {
        setAnchorEl(null);
    };

    return <AdminLayout
        component={
            <Grid container direction="column" wrap="nowrap" className="p-3">
                <Grid container alignItems="center">
                    <Typography component={Grid} item xs variant="h6" className="p-2">
                        E Filed Applications List
                    </Typography>
                    <Grid item xs={12} sm={3} className="p-2">
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            label="Search Applications"
                        />
                    </Grid>
                </Grid>
                <Grid container className="p-2">
                    <Grid item xs={12} component={Paper}>
                        <table className="table table-striped m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th>Filed Year</th>
                                    <th>Filed Inventory</th>
                                    <th>Status</th>
                                    <th>Filed At</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, i) => <tr key={i} style={{verticalAlign: "middle"}}>
                                        <td>{i + 1}</td>
                                        <td>John Deo</td>
                                        <td>demo@gmail.com</td>
                                        <td>2021 - 2022</td>
                                        <td>Single Truck</td>
                                        <td>In Progress</td>
                                        <td>2022-04-24 17:34:19</td>
                                        <td className="text-right">
                                            <IconButton size="small" onClick={openMenu}>
                                                <MoreVertical size={16}/>
                                            </IconButton>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <Grid container justifyContent="flex-end" className="p-2">
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Grid>
                    </Grid>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={close}
                    >
                        <MenuItem onClick={close}>View</MenuItem>
                        <MenuItem onClick={close}>Delete</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        }
    />;
};

export default efileApplications;