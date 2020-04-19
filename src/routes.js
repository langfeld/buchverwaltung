import Buchliste from './components/pages/Buchliste';
import Buchdetails from './components/pages/Buchdetails';
import Buchform from './components/pages/Buchform';

export default[
    {path: '/', component: Buchliste},
    {path: '/buch', component: Buchliste},
    {path: '/buch/:buchnummer', component: Buchdetails},
    {path: '/edit', component: Buchliste},
    {path: '/edit/:buchnummer', component: Buchform},
    {path: '/add', component: Buchform},
]