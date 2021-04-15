import { DAVClient } from 'dav-client/lib';
import httpFetchClient from './core.http.fetch.client';

const davClient = new DAVClient({ baseURL: 'http://0.0.0.0:8001', httpClient: httpFetchClient, headers: { Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiaWF0IjoxNjE4NDU4MTkxLCJleHAiOjE2MTg1MDEzOTF9.iBLN1_8bwkMOniKWNO_6ONLWKoySDWgOASkiDbVCBbrVUcsnkYstPGVy5GEuprvyIzWJ-zpnWDq8NXSU3pEku2jiZedQEbHfHmkMVCdOwESKw20GJEj-rRb3KH3AL_e-ZyOnLMSSPnhByaQHjoaepEGuBNqbR9svw0tUOjqyjV8yhBaRNYyMWUxlYuyqtbufyBjeHlEPr5NsVZHGSQoawwHe43GaAHRXJf-80iJcX81mfjzBziX69elUbEofVGCsSkmr6cCKgaJXA201-oGmYBQnGNUbhpraqbvJzZtTupafwaNggkIjRscLxMjVMW8UK5tLC8lifBzFEpG1CK_kSQ' } });

export default davClient;
