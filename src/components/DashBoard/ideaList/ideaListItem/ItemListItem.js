import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {editIdea, removeIdea} from "../../../../actions/IdeasAction";
import Modal from 'react-modal';

class IdeaListItem extends React.Component {
    state = {
        reachMax: false,
        wordRemain:140,
        modal:false
    };

    onBlur = (e) => {
        if(e.target.innerHTML.length<141 && e.target.innerHTML !== this.props.body){
            this.props.editIdea(e.target.id,{
                body:e.target.innerHTML
            })
            this.setState(()=>{
                return {
                    reachMax:false,
                    modal:true
                }
            })
        }else if(e.target.innerHTML.length>=141){
            this.setState(()=>{
                return {
                    reachMax:true
                }
            })
        }
        this.setState(()=>{
            return {
                wordRemain:140
            }
        })

    }

    onInput = (e) => {
        let wordRemain =140 - e.target.innerHTML.length;
        wordRemain = wordRemain < 0 ? 0 : wordRemain;
        this.setState(()=>{
            return{
                wordRemain
            }
        })
    }

    onRemove = (e) => {
        const id=e.target.previousElementSibling.id;
        console.log(id)
        this.props.removeIdea({id})
    }

    onToggleOff = (e) => {
        this.setState(()=>{
            return {
                modal:false
            }
        })
    }

    componentDidMount = (e) => {
        const wordRemain =140 - document.getElementsByClassName('contentBox')[0].innerHTML.length;
        this.setState(()=>{
            return{
                wordRemain
            }
        })
    }

    //Two ways of editing content. 1. click title 2. click content
    render(){
        return (
            <div className="listItem">
                <Link to={`/edit/${this.props.id}`}>
                    <h3>{this.props.title}</h3>
                </Link>
                <div
                    className="contentBox"
                    id={this.props.id}
                    contentEditable="plaintext-only"
                    onBlur={this.onBlur}
                    onInput={this.onInput}
                >
                    {this.props.body}
                </div>
                <button onClick={this.onRemove} className="btn">Remove</button>
                <span className={this.state.wordRemain<16?'counter':'counter transparent'}>{this.state.wordRemain}</span>
                {
                    this.state.reachMax && <p className="max">The box can only container 140 characters</p>
                }
                <Modal
                    isOpen = {this.state.modal}
                    className = "modal"
                    onRequestClose={this.onToggleOff}
                    closeTimeoutMS = {200}
                >
                    <p>Update Successfully!</p>
                    <button
                        className="btn"
                        onClick={this.onToggleOff}
                    >Ok
                    </button>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editIdea:(id , idea) => {
            dispatch(editIdea(id,idea))
        },
        //date must be a object with id
        removeIdea:(date) => {
            dispatch(removeIdea(date))
        }
    }
}

export default connect(undefined,mapDispatchToProps)(IdeaListItem)




// export default ItemListItem;
