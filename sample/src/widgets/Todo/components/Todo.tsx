import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

// material-ui icons
import SubmitIcon from '@material-ui/icons/ChevronRight';
import TodoIcon from '@material-ui/icons/MoreHoriz';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Close';

// Application imports
import {
  todoSelectors,  todoOperations,
  StateEnum, ITodo,
} from '../modules/default';

// ============================================================================
// CONFIG
//
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex' as 'flex',
  },
  disabledText: {
    color: 'gray',
    textDecoration: 'line-through' as 'line-through',
  },
}));

// ============================================================================
// Type definitions
// ----------------------------------------------------------------------------
// Component interface
//
export interface IProps {
}

// ============================================================================
// Component implementation
// ----------------------------------------------------------------------------
const Component: React.FC<IProps> = (props) => {
  const classes = useStyles({});
  const dispatch = useDispatch();

  // ==========================================================================
  // State
  //
  const [todoString,  setTodoString] = useState<string>('');

  // ==========================================================================
  // react-redux
  //
  const todos = useSelector( todoSelectors.getTodos );

  const onAddItem         = ()           => { dispatch( todoOperations.addTodoItem({todo: todoString}) ) }
  const onChangeItemState = (id: number) => { dispatch( todoOperations.changeTodoItemStatus({id}) ) }
  const onDeleteItem      = (id: number) => { dispatch( todoOperations.deleteTodoItem({id}) ) }

  // ==========================================================================
  // render
  //
  function render() {
    return (
      <Container className={classes.root}>
        <List component="nav">
          {_renderAddTodo()}
          {_renderTodos()}
        </List>
      </Container>
    );
  }

  function _renderAddTodo() {
    return (
      <ListItem key="addTodo">
        <TextField
          onChange={(event) => setTodoString( event.target.value )}
        />
        <IconButton onClick={() => onAddItem()}>
          <SubmitIcon />
        </IconButton>
      </ListItem>
    );
  }

  function _renderTodos() {
    const todoElems: JSX.Element[] = [];

    todos.map.forEach( (todo) => {
      todoElems.push( _renderTodoItem(todo) );
    });

    return todoElems;
  }

  function _renderTodoItem(todo: ITodo) {
    let icon          : JSX.Element;
    let textClassName : string;
    switch (todo.state) {
      case StateEnum.toDo : icon = <TodoIcon />;  break;
      case StateEnum.done : icon = <CheckIcon />; textClassName = classes.disabledText;  break;
    }

    return (
      <ListItem key={todo.id}>
        <ListItemIcon onClick={() => onChangeItemState(todo.id)}>{icon}</ListItemIcon>
        <ListItemText primary={todo.todo} primaryTypographyProps={{className: textClassName}}/>
        <ListItemIcon onClick={() => onDeleteItem(todo.id)}><DeleteIcon /></ListItemIcon>
      </ListItem>
    );
  }

  // ==========================================================================
  // Master renderer
  //
  return render();
}
export default Component;
