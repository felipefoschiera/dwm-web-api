import React from 'react';
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  }
}));

const columns = [
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'celular', label: 'Celular', minWidth: 170 },
  { id: 'operacoes', label: 'Operações', minWidth: 170, align: "right"}
];



const UsuarioList = (props) => {
    
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
    <div>
       <Button variant="contained" color="primary" size="small" 
       className={classes.button} startIcon={<AddIcon />}
       onClick={() => props.editarUsuario(null)}>Novo</Button>

      <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.usuarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                        <TableCell key="operacoes">
                            <IconButton component="span" color="primary" aria-label="edit"
                            onClick={() => props.editarUsuario(row._id)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton component="span" color="primary" aria-label="delete"
                                onClick={() => props.excluirUsuario(row._id)}>
                                  <DeleteForeverIcon />
                            </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 50]}
              component="div"
              count={props.usuarios.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

     
    
    </div>
    );

  }

export default UsuarioList;
