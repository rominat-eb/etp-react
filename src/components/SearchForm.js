import React from 'react';
import PropTypes from 'prop-types';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import InputField from 'eventbrite_design_system/inputField/InputField';
import Button from 'eventbrite_design_system/button/Button';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import {
    FORMATTED_DATE_MAPPING,
    FORMATTED_FORMAT_MAPPING,
    FORMATTED_CATEGORY_MAPPING
} from '../data/constants';

export default class ValidationSearchFormField extends React.PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }

    render() {
        const shouldDisplayError = ({error, submitFailed, touched}) => (!!error && (submitFailed || touched));
        const {
            handleSubmit
        } = this.props;
        return (
            <div className="eds-g-grid">
                <form onSubmit={handleSubmit}>
                    <div className="eds-g-cell eds-g-cell-1-1">
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
                    </div>
                    <div className="eds-g-cell eds-g-cell-1-1">
                        <div className="eds-g-cell eds-g-cell-3-12">
                            <ValidationFormField
                                name="searchDate"
                                shouldDisplayError={shouldDisplayError}
                                v2={true}
                            >
                                <SelectField
                                    values={[
                                        {
                                            display: 'Any date',
                                            value: 'any',
                                        },
                                        ...FORMATTED_DATE_MAPPING,
                                    ]}
                                    id="searchDate-id"
                                    label="Search by date"
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell eds-g-cell-3-12">
                            <ValidationFormField
                                name="searchFormat"
                                shouldDisplayError={shouldDisplayError}
                                v2={true}
                            >
                                <SelectField
                                    values={[
                                        {
                                            display: 'Any event type',
                                            value: 'any',
                                        },
                                        ...FORMATTED_FORMAT_MAPPING,
                                    ]}
                                    id="searchEventType-id"
                                    label="Search by event type"
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell eds-g-cell-3-12">
                            <ValidationFormField
                                name="searchCategory"
                                shouldDisplayError={shouldDisplayError}
                                v2={true}
                            >
                                <SelectField
                                    values={[
                                        {
                                            display: 'Any category',
                                            value: 'any',
                                        },
                                        ...FORMATTED_CATEGORY_MAPPING,
                                    ]}
                                    id="searchCategory-id"
                                    label="Search by category"
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell eds-g-cell-3-12">
                            <ValidationFormField
                                name="searchPrice"
                                shouldDisplayError={shouldDisplayError}
                                v2={true}
                            >
                                <SelectField
                                    values={[
                                        {
                                            display: 'Any price',
                                            value: 'any',
                                        },
                                        {
                                            display: 'Free',
                                            value: 'free',
                                        },
                                        {
                                            display: 'Paid',
                                            value: 'paid',
                                        },
                                    ]}
                                    id="searchPrice-id"
                                    label="Search by price"
                                />
                            </ValidationFormField>
                        </div>
                    </div>
                    <div className="eds-g-cell">
                        <Button
                            style="fill"
                            type="submit"
                        >
                            Search
                        </Button>
                        <Button
                        >
                            Reset
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}
