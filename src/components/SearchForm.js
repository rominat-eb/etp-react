import React from 'react';
import PropTypes from 'prop-types';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import InputField from 'eventbrite_design_system/inputField/InputField';
import Button from 'eventbrite_design_system/button/Button';

export default class ValidationSearchFormField extends React.PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }

    render() {
        const shouldDisplayError = ({error, submitFailed, touched}) => (!!error && (submitFailed || touched));
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <ValidationFormField
                    name="searchEvent"
                    label="Search"
                    shouldDisplayError={shouldDisplayError}
                    v2={true}
                >
                    <InputField
                        id="searchEventForm"
                        type="text"
                        name="searchEvent"
                        label="Search"
                        placeholder="Insert a term to search"
                    />
                </ValidationFormField>
                <Button
                    style="fill"
                    type="submit"
                >
                    Search
                </Button>
            </form>
        );
    }
}
