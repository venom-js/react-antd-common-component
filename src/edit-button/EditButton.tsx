/**
 * @name 组件名
 * @author MingShined
 */
import React, { Component } from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface BtnProps extends ButtonProps {
  text?: React.ReactNode;
  style?: React.CSSProperties;
}

interface EditButtonProps {
  style?: React.CSSProperties;
  cancelBtnProps?: BtnProps;
  saveBtnProps?: BtnProps;
  editBtnProps?: BtnProps;
  onCancel?: (isEdit: boolean) => void;
  onSave?: (isEdit: boolean) => Promise<any> | boolean;
  onClick?: (isEdit: boolean) => void;
}

const state = {
  isEdit: false
};

type EditButtonState = Partial<typeof state>;

export default class EditButton extends Component<
  EditButtonProps,
  EditButtonState
> {
  static defaultProps: EditButtonProps = {
    cancelBtnProps: {
      text: '取消'
    },
    saveBtnProps: {
      text: '保存',
      type: 'primary'
    },
    editBtnProps: {
      text: '编辑',
      type: 'primary'
    }
  };
  state = state;
  handleCancel = () => {
    this.setState({ isEdit: false }, () => {
      const onCancel = this.props.onCancel;
      if (onCancel) {
        onCancel(this.state.isEdit);
      }
    });
  };
  handleSave = async () => {
    const onSave = this.props.onSave;
    if (!onSave) {
      return;
    }
    const success = await onSave(this.state.isEdit);
    if (success) {
      this.setState({
        isEdit: false
      });
    }
  };
  handleEdit = () => {
    this.setState(
      {
        isEdit: true
      },
      () => {
        const onClick = this.props.onClick;
        if (onClick) {
          onClick(this.state.isEdit);
        }
      }
    );
  };
  render() {
    const { cancelBtnProps, saveBtnProps, editBtnProps, style } = this.props;
    return (
      <div style={style}>
        {this.state.isEdit ? (
          <ButtonGroup>
            <Button {...cancelBtnProps} onClick={this.handleCancel}>
              {cancelBtnProps.text}
            </Button>
            <Button {...saveBtnProps} onClick={this.handleSave}>
              {saveBtnProps.text}
            </Button>
          </ButtonGroup>
        ) : (
          <Button {...editBtnProps} onClick={this.handleEdit}>
            {editBtnProps.text}
          </Button>
        )}
      </div>
    );
  }
}
