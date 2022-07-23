import React from 'react'
import Header from '../../components/header/Header'

import './login.css'

const Login = () => {

  return (
    <section className='login__page flex center relative'>
      <div className="login__page-cta flex center column-center">
        <div className="login__page__cta-logo">
          <img src="/assets/cta-logo-one.svg" alt="" />
        </div>
        <div className="login__page__cta-logo">
          <button>
            Get all there
          </button>
        </div>
        <div className="login__page__cta-logo text-center">
          <p>get premier access to raya and the last dragon for an additional free with a disney+ subscription. as of 03/26/21, the price of disney+ and the disney boundle will increase by $1.</p>
        </div>
      </div>
    </section>
  )
}

export default Login