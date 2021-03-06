import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
// import { toAbsoluteUrl } from "../../vendors/_metronic";
import './auth.scss';
import '../../vendors/_metronic/_assets/sass/pages/login/login-1.scss';
import '../../vendors/_metronic/_assets/plugins/line-awesome/css/line-awesome.css';
import '../../vendors/_metronic/_assets/plugins/flaticon/flaticon.css';
import '../../vendors/_metronic/_assets/plugins/flaticon2/flaticon.css';
import authBg from '../../assets/demo/bg/auth-bg.jpg';
import im_logo_mail_sm from '../../assets/media/im_logo_mail_sm.png';


export default function Auth() {
  return (
    <>
      <div
        className={'kt-grid kt-grid--ver kt-grid--root'}
        style={{ height: '100%' }}
      >
        <div
          id="kt_login"
          className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1"
        >
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
            <div
              className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside"
              style={{
                background: `url(${authBg})`
              }}
            >
              <div className="kt-grid__item">
                <Link to="/" className="kt-login__logo">
                  <img alt="Logo" src={im_logo_mail_sm}/>
                </Link>
              </div>
              <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                <div className="kt-grid__item kt-grid__item--middle">
                  <h3 className="kt-login__title">Welcome to Islandmining!</h3>
                  <h4 className="kt-login__subtitle">
                    Island Mining is driving the next generation of
                    cryptocurrency mining by making it accessible to everyone.
                  </h4>
                </div>
              </div>
              <div className="kt-grid__item">
                <div className="kt-login__info">
                  <div className="kt-login__copyright">
                    &copy; 2018 Metronic
                  </div>
                  <div className="kt-login__menu">
                    <Link to="/terms" className="kt-link">
                      Privacy
                    </Link>
                    <Link to="/terms" className="kt-link">
                      Legal
                    </Link>
                    <Link to="/terms" className="kt-link">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
              <Switch>
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Registration} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
