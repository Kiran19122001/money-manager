import {Component} from 'react'

import './index.css'

class TransactionItem extends Component {
  render() {
    const {TransactionDetails, updateTransactionList} = this.props
    const {Title, Amount, Type, id} = TransactionDetails
    const onDelete = () => {
      updateTransactionList(id)
    }

    return (
      <li className="tr-item">
        <p>{Title}</p>
        <p>Rs {Amount}</p>
        <p>{Type}</p>
        <div>
          <button type="button" className="delete-icon" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt=""
              className="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default TransactionItem
