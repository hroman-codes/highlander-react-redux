import React from 'react';

import 'bulma/css/bulma.css';
import '../css/style.css';

export default function StatsList(props) {
  return (
    <div className='tile is-parent'>
      <div className='tile is-child box header'>
        <nav className="level dashboard-title">
          <div classNameName="level-left">
            <div className="level-item">
              <span className="icon icon-dasboard-placement">
                <i className="fa fa-list-ol" aria-hidden="true"></i>
              </span>
              <p>
                Stats
              </p>
            </div>
          </div>
          <div className="level-right">
            <span className="level-item">
              <a className="button is-outlined is-primary" href="add-stats.html">
                Add New Stats
              </a>
            </span>
          </div>
        </nav>

        <section>
          <div className="notification has-text-centered stats-module-dashboard-message">
            You dont have Stats.
          </div>

          <table className="table">
            <thead className="stat-header-details-container">
              <tr>
                <th>
                  <abbr title='Position'>Pos</abbr>
                </th>
                <th>
                  <abbr title='Name'>Name</abbr>
                </th>
                <th>
                  <abbr title='Hits'>Hits</abbr>
                </th>
                <th>
                  <abbr title='At Bats'>AB</abbr>
                </th>
                <th>
                  <abbr title='Home Runs'>HR</abbr>
                </th>
                <th>
                  <abbr title='Earned Runs'>ER</abbr>
                </th>
                <th>
                  <abbr title='Inning Pitched'>IP</abbr>
                </th>
                <th>
                  <abbr title='Strike Outs'>Strike Outs</abbr>
                </th>
              </tr>
            </thead>
            <tbody className="stat-details-container">
              <tr>
                <th>2nd base</th>
                <td>Lia Roman</td>
                <td>7</td>
                <td>5</td>
                <td>3</td>
                <td>18</td>
                <td>20</td>
                <td>89</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
