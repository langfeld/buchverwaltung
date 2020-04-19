import Buchliste from './components/pages/Buchliste';
import Buchdetails from './components/pages/Buchdetails';
import Buchform from './components/pages/Buchform';
import Buchentfernen from './components/pages/Buchentfernen';

export default[
    {path: '/', component: Buchliste},
    {path: '/buch', component: Buchliste},
    {path: '/buch/:buchnummer', component: Buchdetails},
    {path: '/edit', component: Buchliste},
    {path: '/edit/:buchnummer', component: Buchform},
    {path: '/add', component: Buchform},
    {path: '/del', component: Buchliste},
    {path: '/del/:buchnummer', component: Buchentfernen},
]