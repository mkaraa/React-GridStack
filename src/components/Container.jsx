import React from 'react'
import '../styles/container.scss'
import TopChartDataSet from '../model/topChart.json'
import TracketAppsDataSet from '../model/trackedApps.json'
import AppSuggestionDataSet from '../model/appSuggestions.json'
import ReactStars from 'react-rating-stars-component'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topCharts: []
    }
  }

  getDataFomGivenDate (date) {
    var temp = []

    TopChartDataSet.map((data, index) => {
      if (TopChartDataSet[index].date == date) {
        temp = TopChartDataSet[index].apps
      } else console.log('error')
    })

    return temp
  }

  render () {
  
    var temp = []
    var today = new Date()
    var getToday = today.getFullYear() + '-' + 10 + '-' + (today.getDay() + 6)
    var yesterday = today.getFullYear() + '-' + 10 + '-' + (today.getDay() + 5)

    temp = this.getDataFomGivenDate(getToday)

    var yesterdayData = this.getDataFomGivenDate(yesterday)

    temp.forEach(item => {
      yesterdayData.forEach(yesterDayItem => {
        if (item.id == yesterDayItem.id) {
          item.diff = item.rank - yesterDayItem.rank
        }
      })
    })

    var today = new Date()
    var getToday = today.getFullYear() + '-' + 10 + '-' + (today.getDay() + 6)
    var imgUrl = './img/'

    return (
      <div className='grid-stack'>
        {/* App Suggestions */}
        <div
          class=' grid-stack-item'
          data-gs-x='0'
          data-gs-y='6'
          data-gs-width='6'
          data-gs-height='6'
        >
          <div
            class=' grid-stack-item-content'
            style={{ backgroundColor: 'white !important' }}
          >
            <div
              style={{
                background: 'white !important',
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            >
              <p className='content-title'>App Suggestions</p>
              <div className='divider' />
              {AppSuggestionDataSet.map((data, index) => {
                return (
                  <>
                    <table>
                      <tr>
                        <td colSpan='1'>
                          <span className='index'>{index + 1}</span>
                        </td>
                        <td colSpan='2'>
                          <img
                            className='icon-content'
                            src={require(`${imgUrl + data.iconName}`)}
                            alt='icon'
                          />
                        </td>
                        <td colSpan='6'>
                          <tr>
                            <td colSpan='6'>
                              <span className='app-name'>{data.name}</span>
                            </td>
                          </tr>
                          <tr className='tr-container'>
                            <td>
                              <img
                                className='sub-info-flag'
                                src={require(`${imgUrl + data.country}.png`)}
                                alt='country'
                              />
                            </td>
                            <td>
                              <p className='sub-info-publisher'>
                                {data.publisher}
                              </p>
                            </td>
                            <td>
                              <ReactStars
                                count={5}
                                value={data.rating}
                                size={18}
                                isHalf={true}
                                activeColor='#ffd700'
                              />
                            </td>
                            <td>
                              <span className='sub-info-publisher'>
                                ({data.rank})
                              </span>
                            </td>
                          </tr>
                        </td>
                        <td
                          colSpan='3'
                          style={{
                            float: 'right',
                            'border-left': '2px solid #EFEFF2'
                          }}
                        >
                          <span class='k-icon k-i-arrow-60-down'></span>
                        </td>
                      </tr>
                      <div className='divider' />
                    </table>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        {/* Tracked Apps */}
        <div
          class=' grid-stack-item'
          data-gs-x='6'
          data-gs-y='6'
          data-gs-width='6'
          data-gs-height='6'
        >
          <div
            class=' grid-stack-item-content'
            style={{ backgroundColor: 'white !important' }}
          >
            <div
              style={{
                background: 'white !important',
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            >
              <p className='content-title'>Tracked Apps</p>
              <div className='divider' />
              {TracketAppsDataSet.map((data, index) => {
                return (
                  <>
                    <table>
                      <tr>
                        <td colSpan='1'>
                          <span className='index'>{index + 1}</span>
                        </td>
                        <td colSpan='2'>
                          <img
                            className='icon-content'
                            src={require(`${imgUrl + data.iconName}`)}
                            alt='icon'
                          />
                        </td>
                        <td colSpan='6'>
                          <tr>
                            <td colSpan='6'>
                              <span className='app-name'>{data.name}</span>
                            </td>
                          </tr>
                          <tr className='tr-container'>
                            <td>
                              <img
                                className='sub-info-flag'
                                src={require(`${imgUrl + data.country}.png`)}
                                alt='country'
                              />
                            </td>
                            <td>
                              <p className='sub-info-publisher'>
                                {data.publisher}
                              </p>
                            </td>
                            <td>
                              <ReactStars
                                count={5}
                                value={data.rating}
                                size={18}
                                isHalf={true}
                                activeColor='#ffd700'
                              />
                            </td>
                            <td>
                              <span className='sub-info-publisher'>
                                ({data.rank})
                              </span>
                            </td>
                          </tr>
                        </td>
                        <td
                          colSpan='3'
                          style={{
                            float: 'right',
                            'border-left': '2px solid #EFEFF2',
                            display: 'inline'
                          }}
                        >
                          {data.diff > 0 ? (
                            <div>
                              <span className='ranked-change-text'>
                                +{data.diff}
                              </span>
                              <span
                                class='k-icon k-i-arrow-60-down downToUp'
                                style={{ color: 'green' }}
                              ></span>
                            </div>
                          ) : data.diff < 0 ? (
                            <div>
                              <span
                                className='ranked-change-text'
                                style={{ color: 'red' }}
                              >
                                {data.diff}
                              </span>
                              <span class='k-icon k-i-arrow-60-down'></span>
                            </div>
                          ) : (
                            <div>
                              <span
                                className='ranked-change-text'
                                style={{ color: 'rgb(223, 179, 35)' }}
                              >
                                &nbsp; {data.diff}
                              </span>
                              <span class='k-icon noChange k-i-arrow-60-down'>
                                -
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                      <div className='divider' />
                    </table>
                  </>
                )
              })}
            </div>
          </div>
        </div>

        {/* Top Charts */}
        <div
          class=' grid-stack-item'
          data-gs-x='0'
          data-gs-y='4'
          data-gs-width='6'
          data-gs-height='6'
        >
          <div
            class=' grid-stack-item-content'
            style={{ backgroundColor: 'white !important' }}
          >
            <div
              style={{
                background: 'white !important',
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            >
              <p className='content-title'>Top Charts</p>
              <div className='divider' />
              {temp.map((data, index) => {
                return (
                  <>
                    <table>
                      <tr>
                        <td colSpan='1'>
                          <span className='index'>{index + 1}</span>
                        </td>
                        <td colSpan='2'>
                          <img
                            className='icon-content'
                            src={require(`${imgUrl + data.iconName}`)}
                            alt='icon'
                          />
                        </td>
                        <td colSpan='6'>
                          <tr>
                            <td colSpan='6'>
                              <span className='app-name'>{data.name}</span>
                            </td>
                          </tr>
                          <tr className='tr-container'>
                            <td>
                              <img
                                className='sub-info-flag'
                                src={require(`${imgUrl + data.country}.png`)}
                                alt='country'
                              />
                            </td>
                            <td>
                              <p className='sub-info-publisher'>
                                {data.publisher}
                              </p>
                            </td>
                            <td>
                              <ReactStars
                                count={5}
                                value={data.rating}
                                size={18}
                                isHalf={true}
                                activeColor='#ffd700'
                              />
                            </td>
                            <td>
                              <span className='sub-info-publisher'>
                                ({data.rank})
                              </span>
                            </td>
                          </tr>
                        </td>
                        <td
                          colSpan='3'
                          style={{
                            float: 'right',
                            'border-left': '2px solid #EFEFF2',
                            display: 'inline'
                          }}
                        >
                          {data.diff > 0 ? (
                            <div>
                              <span className='ranked-change-text'>
                                +{data.diff}
                              </span>
                              <span
                                class='k-icon k-i-arrow-60-down downToUp'
                                style={{ color: 'green' }}
                              ></span>
                            </div>
                          ) : data.diff < 0 ? (
                            <div>
                              <span
                                className='ranked-change-text'
                                style={{ color: 'red' }}
                              >
                                {data.diff}
                              </span>
                              <span class='k-icon k-i-arrow-60-down'></span>
                            </div>
                          ) : (
                            <div>
                              <span
                                className='ranked-change-text'
                                style={{ color: 'rgb(223, 179, 35)' }}
                              >
                                &nbsp; {data.diff}
                              </span>
                              <span class='k-icon noChange k-i-arrow-60-down'>
                                -
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                      <div className='divider' />
                    </table>
                  </>
                )
              })}
            </div>
          </div>
        </div>

        {/* RANK History */}
        <div
          class=' grid-stack-item'
          data-gs-x='6'
          data-gs-y='7'
          data-gs-width='6'
          data-gs-height='6'
        >
          <div
            class=' grid-stack-item-content'
            style={{ backgroundColor: 'white !important' }}
          >
            <p className='content-title'>Rank History</p>
            <div className='divider' />

              {/* TODO: Ranking History */}

          </div>
        </div>
      </div>
    )
  }
}

export default Container
