import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    inputTitle: '',
    inputAmount: '',
    inputType: transactionTypeOptions[0].optionId,
  }

  updateBalence = () => {
    const {transactionsList} = this.state
    let balence = 0
    let income = 0
    let expences = 0
    transactionsList.forEach(eachTrs => {
      if (eachTrs.Type === transactionTypeOptions[0].displayText) {
        income += eachTrs.Amount
      } else {
        expences += eachTrs.Amount
      }
      balence = income - expences
    })

    return balence
  }

  updateIncome = () => {
    const {transactionsList} = this.state
    let income = 0

    transactionsList.forEach(eachTrs => {
      if (eachTrs.Type === transactionTypeOptions[0].displayText) {
        income += eachTrs.Amount
      }
    })

    return income
  }

  updateExpences = () => {
    const {transactionsList} = this.state
    let expenses = 0

    transactionsList.forEach(eachTrs => {
      if (eachTrs.Type === transactionTypeOptions[1].displayText) {
        expenses += eachTrs.Amount
      }
    })

    return expenses
  }

  updateTransactionList = id => {
    const {amountList} = this.state
    const result = amountList.filter(each => each.id !== id)
    this.setState({amountList: result})
  }

  onAddButton = e => {
    e.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    if (inputTitle !== '' && inputAmount !== '') {
      const typeTransactId = transactionTypeOptions.find(
        each => each.optionId === inputType,
      )
      const {displayText} = typeTransactId
      const newTransaction = {
        id: v4(),
        Title: inputTitle,
        Amount: parseInt(inputAmount),
        Type: displayText,
      }
      this.setState(prev => ({
        transactionsList: [...prev.transactionsList, newTransaction],
        inputTitle: '',
        inputAmount: '',
        inputType: transactionTypeOptions[0].optionId,
      }))
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter valid details')
    }
  }

  handleTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  handleAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  handleType = event => {
    this.setState({inputType: event.target.value})
  }

  render() {
    const {inputTitle, inputAmount, inputType, transactionsList} = this.state
    const BalenceBox = this.updateBalence()
    const IncomeBox = this.updateIncome()
    const ExpencesBox = this.updateExpences()

    return (
      <div className="maian-container">
        <div className="dashboard-container">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your
            <span className="mnmg-text"> Money Manager</span>
          </p>
        </div>
        <div className="money-type">
          <div>
            <MoneyDetails
              BalenceBox={BalenceBox}
              IncomeBox={IncomeBox}
              ExpencesBox={ExpencesBox}
            />
          </div>
        </div>
        <div className="transaction-container">
          <form className="input-container" onSubmit={this.onAddButton}>
            <h className="add-head">Add Transction</h>
            <div className="details-input">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="inputs"
                onChange={this.handleTitle}
                value={inputTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="inputs"
                onChange={this.handleAmount}
                value={inputAmount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                className="options"
                onChange={this.handleType}
                value={inputType}
                id="select"
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="add_button"
                onClick={this.onAddButton}
              >
                Add
              </button>
            </div>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <div className="history-inside">
              <ul className="transact-list">
                <li className="history-page">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>{}</p>
                </li>
                {transactionsList.map(each => (
                  <TransactionItem
                    TransactionDetails={each}
                    key={each.id}
                    updateTransactionList={this.updateTransactionList}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
