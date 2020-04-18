import Buchliste from './components/pages/Buchliste';
import Buchdetails from './components/pages/Buchdetails';

export default[
    {path: '/', component: Buchliste},
    {path: '/buch', component: Buchliste},
    {path: '/buch/:buchnummer', component: Buchdetails},
]