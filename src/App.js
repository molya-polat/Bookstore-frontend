import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

 import {HomeView} from './pages/HomeView'
import {LoginView} from './pages/LoginView'
 import {BookDetailsView} from './pages/BookDetailsView'
 import {CartView} from './pages/CartView'
import {MyCartView} from './pages/MyCartView'
import {OrderView} from './pages/OrderView'
import {ErrorPage} from './pages/ErrorPage'
import {CompletedPage} from './pages/CompletedPage'
import {RegisterView} from './pages/RegisterView'
import {SuccessRegPage} from './pages/SuccessRegPage'
import {GetOrdersPage} from './pages/GetOrdersPage'
import {HomeAdminView} from './pages/HomeAdminView'
import {GetUsersView} from './pages/GetUsersView'
import {OrderDetailsView} from './pages/OrderDetailsView'
import {GetAllOrdersPage} from './pages/GetAllOrdersPage'
import {DisabledUserView} from './pages/DisabledUserView'
import {NewBookView} from './pages/NewBookView'
import {RegisterAgainView} from './pages/RegisterAgainView'
import {ChangeStatePage} from './components/ChangeStatePage'
import {BookHotListPage} from './pages/BookHotListPage'
import {ConsumptionListPage} from './pages/ConsumptionListPage'
import {AnalyzePage} from './pages/AnalyzePage'
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    <Route path='/register' component={RegisterView}/>
                    <Route path='/home' component={HomeView}/>
                    <Route path='/addToCart' component={CartView}/>
                    <Route path='/details' component={BookDetailsView}/>
                    <Route path='/myCart' component={MyCartView}/>
                    <Route path='/buyBooks' component={OrderView}/>
                    <Route path='/error' component={ErrorPage}/>
                    <Route path='/completed' component={CompletedPage}/>
                    <Route path='/successRegister' component={SuccessRegPage}/>
                    <Route path='/getOrders' component={GetOrdersPage}/>
                    <Route path='/homeAdmin' component={HomeAdminView}/>
                    <Route path='/allUsers' component={GetUsersView}/>
                    <Route path='/orderDetails' component={OrderDetailsView}/>
                    <Route path='/getAllOrders' component={GetAllOrdersPage}/>
                    <Route path='/disabledUser' component={DisabledUserView}/>
                    <Route path='/addNewBook' component={NewBookView}/>
                    <Route path='/usernameExists' component={RegisterAgainView}/>
                    <Route path='/changeState' component={ChangeStatePage}/>
                    <Route path='/bookHotList' component={BookHotListPage}/>
                    <Route path='/consumptionList' component={ConsumptionListPage}/>
                    <Route path='/analysis' component={AnalyzePage}/>
                    <Redirect from="/*" to="/login" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
