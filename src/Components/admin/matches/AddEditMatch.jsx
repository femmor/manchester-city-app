import React, { Component } from 'react';
import AdminLayout from "../../../Hoc/AdminLayout"
import FormField from "../../ui/FormFields"
import { validate } from "../../ui/misc"

class AddEditMatch extends Component {

    state = {
        matchId: "",
        formType: "",
        formError: false,
        formSuccess: "",
        teams: [],
        formdata: {
            data: {
                element: {}
            }
        }
    }

    render() {
        return (
            <AdminLayout>
                Edit Match
            </AdminLayout>
        );
    }
}

export default AddEditMatch;
