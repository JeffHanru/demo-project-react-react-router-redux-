import React from 'react';
import { connect } from 'react-redux';

export const UserList = (props) => (
    <div>
        <h2>This is user list, it will show no item if no user fetched</h2>
        <div className="itemList">
            {
                props.users.length === 0 ? (
                    <div>No user existed</div>
                ):(
                    props.users.map((item,index)=>{
                        return (
                            <div>{item.id}</div>
                        )
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        users:state.request.users
    };
};

export default connect(mapStateToProps)(UserList);