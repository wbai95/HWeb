import { http } from "./index";

export default {
    postQuerierInfo(data) {
        return http.post('/v1/mail/sendQuerier', data);
    }
}