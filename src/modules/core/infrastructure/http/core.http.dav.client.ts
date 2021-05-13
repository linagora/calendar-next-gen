import { DAVClient } from 'dav-client/lib';
import httpFetchClient from './core.http.fetch.client';

const [username, password] = ['admin@open-paas.org', 'secret'];
const token = `Basic ${btoa([username, password].join(':'))}`;

const davClient = new DAVClient({ baseURL: 'http://0.0.0.0:8001', httpClient: httpFetchClient, headers: { Authorization: token } });

export default davClient;
