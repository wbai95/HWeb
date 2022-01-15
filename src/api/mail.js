import { http } from "./index";

const mailApi = {
    postQuerierInfo(data) {
        return http.post('/v1/mail/sendQuerier', data);
    }
}

export default mailApi;