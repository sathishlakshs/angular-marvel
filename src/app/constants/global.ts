import { ROUTE_URLS } from './routeurls';

const MENUS = [{id: 1, label: 'HOME', name: 'home', path: ROUTE_URLS.HOME},
        {id: 2, label: 'CHARACTERS', name: 'characters', path: ROUTE_URLS.CHARACTERS},
        {id: 3, label: 'COMICS', name: 'comics', path: ROUTE_URLS.COSMICS},
        {id: 4, label: 'SERIES', name: 'series', path: ROUTE_URLS.SERIES}];

const HOME_CARDS = [{id: 1, label: 'CHARACTERS', name: 'characters', path: ROUTE_URLS.CHARACTERS, linkLabel: 'See All', children: []},
{id: 2, label: 'COMICS', name: 'comics', path: ROUTE_URLS.COSMICS, linkLabel: 'See All', children: []},
{id: 3, label: 'SERIES', name: 'series', path: ROUTE_URLS.SERIES, linkLabel: 'See All', children: []}];

const HOME_SLIDES = [ {id: 1, name: 'pie'}, {id: 2, name: 'line' }, {id: 3, name: 'bar' }];

export { MENUS, HOME_CARDS, HOME_SLIDES };
