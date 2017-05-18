/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, { PropTypes, PureComponent, } from 'react'
// import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'
import { Form, Select,} from 'antd'

const FormItem = Form.Item
const OptionItem = Select.Option

class StudyTest extends PureComponent {
    static defaultProps = {
    }
    static propTypes = {
        options: PropTypes.array.isRequired,
        selectValue: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const selectItemLayout = {
            labelCol: { span: 6, },
            wrapperCol: { span: 1, },
        }

        const { options, selectValue, onChange, } = this.props

        return (
            <FormItem
                id="select"
                label="所属类型"
                {...selectItemLayout} required>
                <Select id="select" size="large" defaultValue="所属类型" style={{ width: 160,}} value={selectValue} onChange={onChange}>
                    {options.map(option =>
                        <OptionItem value={option.title} key={option.id}>
                            {option.title}
                        </OptionItem>)
                    }
                </Select>
            </FormItem>
        )
    }
}

export default StudyTest
