var React = require('react')
var {Link, IndexLink} = require('react-router')

var Navigation = () => {
  
  return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Time App</li>
          <li>
            <IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
          </li>
          <li>
            <IndexLink to='/countdown' activeClassName='active-link'>Countdown</IndexLink>
          </li>
          <li>
            <IndexLink to='/about' activeClassName='active-link'>About</IndexLink>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>Created by&nbsp;
            <a id='nav-name' href='//github.com/DavOnGit' target='_blank'>Daviz</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation
