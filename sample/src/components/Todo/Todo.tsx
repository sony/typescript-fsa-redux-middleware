import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import SubmitIcon from '@material-ui/icons/ChevronRight';
import TodoIcon from '@material-ui/icons/MoreHoriz';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Close';

import { StateEnum, ITodo } from '../../include/model/TodoModel';
import { TextField } from '@material-ui/core';

// ============================================================================
// CONFIG
//
const styles = {
  root: {
    display: 'flex' as 'flex',
  },
  disabledText: {
    color: 'gray',
    textDecoration: 'line-through' as 'line-through',
  },
};

// ============================================================================
// Type definition
//
interface IOwnStates {
  todo  : string;
}
interface IOwnProps {
  todos             : Map<number, ITodo>;
  onAddItem         : (todo: string) => void;
  onChangeItemState : (id: number) => void;
  onDeleteItem      : (id: number) => void;
}

interface IStates extends IOwnStates {}
interface IProps extends IOwnProps, WithStyles<typeof styles> {}

// ============================================================================
// Class implementation
//
export class Todo extends React.Component<IProps, IStates> {
  constructor(props: any) {
    super(props);
    this.state = { todo: '' };
  }

  // ==========================================================================
  // UI event handler
  //
  handleChangeTodo(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ todo: event.target.value });
  }

  handleClickAddTodo() {
    const { todo } = this.state;
    this.props.onAddItem(todo);
  }

  // ==========================================================================
  // render
  //
  render() {
    return (
      <div style={styles.root}>
        <List component="nav">
          {this._renderAddTodo()}
          {this._renderTodos()}
        </List>
      </div>
    );
  }

  private _renderAddTodo() {
    return (
      <ListItem key="addTodo">
        <TextField
          onChange={this.handleChangeTodo.bind(this)}
        />
        <IconButton onClick={this.handleClickAddTodo.bind(this)}>
          <SubmitIcon />
        </IconButton>
      </ListItem>
    );
  }

  private _renderTodos() {
    const { todos } = this.props;
    const todoElems: JSX.Element[] = [];

    todos.forEach( (todo) => {
      todoElems.push( this._renderTodoItem(todo) );
    });

    return todoElems;
  }

  private _renderTodoItem(todo: ITodo) {
    const { onChangeItemState, onDeleteItem } = this.props;

    let icon      : JSX.Element;
    let textStyle : React.CSSProperties;
    switch (todo.state) {
      case StateEnum.toDo : icon = <TodoIcon />;  break;
      case StateEnum.done : icon = <CheckIcon />; textStyle = styles.disabledText;  break;
    }

    return (
      <ListItem key={todo.id}>
        <ListItemIcon onClick={() => onChangeItemState(todo.id)}>{icon}</ListItemIcon>
        <ListItemText primary={todo.todo} primaryTypographyProps={{style: textStyle}}/>
        <ListItemIcon onClick={() => onDeleteItem(todo.id)}><DeleteIcon /></ListItemIcon>
      </ListItem>
    );
  }
}

// ============================================================================
// Class settings
//
export default withStyles(styles)(Todo);
