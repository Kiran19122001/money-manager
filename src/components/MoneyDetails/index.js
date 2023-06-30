import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {BalenceBox, IncomeBox, ExpencesBox} = this.props

    return (
      <div className="money-items-list">
        <div className="first-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-images"
          />
          <div>
            <p className="money-type-items">Your Balance</p>
            <p className="money-count-item" data-testid="balanceAmount">
              Rs {BalenceBox}
            </p>
          </div>
        </div>
        <div className="second-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="money-images"
          />
          <div>
            <p className="money-type-items">Your Income</p>
            <p className="money-count-item" data-testid="incomeAmount">
              Rs {IncomeBox}
            </p>
          </div>
        </div>
        <div className="third-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-images"
          />
          <div>
            <p className="money-type-items">Your Expences</p>
            <p className="money-count-item" data-testid="expensesAmount">
              Rs {ExpencesBox}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
