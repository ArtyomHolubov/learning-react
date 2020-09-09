import React, { Component } from 'react';
import { Header, Table, Button, Icon, Image, Input, Label } from 'semantic-ui-react'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            editedTitle: props.data.title,
            editedPrice: props.data.price,
            editedPricePcs: props.data.price_pcs,
            editedImage: props.data.images.preview,
            isEdit: false,
        }
    }

    onEdit = () => {
        this.setState({ isEdit: true })
    }

    onCancel = () => {
        this.setState({
            isEdit: false,
            editedName: this.props.data.title,
            editedPrice: this.props.data.price,
            editedPricePcs: this.props.data.price_pcs,
            editedImage: this.props.data.images.preview
        })
    }

    onChangeName = (e) => {
        this.setState({
            editedTitle: e.target.value
        })
    }

    onChangePrice = (e) => {
        this.setState({
            editedPrice: e.target.value,
            editedPricePcs: (e.target.value / 28).toFixed(2)
        })
    }

    onChangePricePcs = (e) => {
        this.setState({
            editedPricePcs: e.target.value,
            editedPrice: (e.target.value * 28).toFixed(0),
        })
    }

    updateProduct = () => {
        this.props.data.title = this.state.editedTitle;
        this.props.data.price = this.state.editedPrice;
        this.props.data.price_pcs = this.state.editedPricePcs;
        this.props.data.images.preview = this.state.editedImage;

        const product = this.props.data;

        this.props.onUpdateProduct(product);
        this.setState({ isEdit: false })
    }

    render() {
        const { isEdit, editedTitle, editedPrice, editedPricePcs, editedImage } = this.state;
        const { data, onRemoveProduct } = this.props;
        return (
            <Table.Row>
                <Table.Cell>
                    {
                        isEdit
                            ? <Input fluid placeholder="name" onChange={this.onChangeName} value={editedTitle} type="text" />
                            : <Header as='h4' textAlign='left'>
                                {data.title}
                            </Header>
                    }
                </Table.Cell>
                <Table.Cell singleLine>
                    {
                        isEdit
                            ? <Input onChange={this.onChangePrice} value={editedPrice} labelPosition='right' type='text' placeholder='Price UAH'>
                                <Label basic>₴</Label>
                                <input />
                            </Input>
                            : data.price
                    }
                </Table.Cell>
                <Table.Cell singleLine>
                    {
                        isEdit
                            ? <Input onChange={this.onChangePricePcs} value={editedPricePcs} labelPosition='right' type='text' placeholder='Price USD'>
                                <Label basic>$</Label>
                                <input />
                            </Input>
                            : data.price_pcs
                    }
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    <Image src={data.images.preview} size='mini' verticalAlign='top' />
                </Table.Cell>
                <Table.Cell collapsing>
                    {!isEdit &&
                        <Button animated='fade'
                            primary
                            onClick={this.onEdit}>
                            <Button.Content hidden>Edit</Button.Content>
                            <Button.Content visible>
                                <Icon name='edit' />
                            </Button.Content>
                        </Button>
                    }
                    {!isEdit &&
                        <Button animated='fade'
                            color='red'
                            onClick={() => onRemoveProduct(data.id)}>
                            <Button.Content hidden>Delete</Button.Content>
                            <Button.Content visible>
                                <Icon name='delete' />
                            </Button.Content>
                        </Button>
                    }

                    {isEdit &&
                        <Button animated='fade'
                            primary
                            onClick={this.updateProduct}>
                            <Button.Content hidden>Save</Button.Content>
                            <Button.Content visible>
                                <Icon name='check' />
                            </Button.Content>
                        </Button>
                    }
                    {isEdit &&
                        <Button animated='fade'
                            color='red'
                            onClick={this.onCancel}>
                            <Button.Content hidden>Cancel</Button.Content>
                            <Button.Content visible>
                                <Icon name='stop circle outline' />
                            </Button.Content>
                        </Button>
                    }
                </Table.Cell>

            </Table.Row>
        );
    }
}

export default User;


export function User2({ name, position }) {
    return <div>{name} #{position}</div>
}