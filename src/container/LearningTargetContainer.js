/**
 * Created by shiyunjie on 17/5/13.
 */
import './LearningTargetContainer.pcss'
import action from '../action'
import React, {PureComponent,} from 'react'
import {connect,} from 'react-redux'
import {Form, Input, Select, Row, Col, Button, Alert, Modal,} from 'antd'
const FormItem = Form.Item
const OptionItem = Select.Option
const require = true
const formItemLayout = {
    labelCol: {
        xs: {span: 24,},
        sm: {span: 6,},
    },
    wrapperCol: {
        xs: {span: 24,},
        sm: {span: 10,},
    },
}
const formSelectLayout = {
    labelCol: {
        xs: {span: 24,},
        sm: {span: 6,},
    },
    wrapperCol: {
        xs: {span: 24,},
        sm: {span: 4,},
    },
}


@connect(
    state => ({
        LearningTargetState: state.LearningTargetState,
    }),
    action.LearningTarget,
    (stateProps, dispatchProps, ownProps) => {
        return {
            ...stateProps,
            ...dispatchProps,
            ...ownProps,
        }
    },
    {
        pure: true,
        withRef: true,
    }
)
class LearningTargetView extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            selectValue: '0',
            learningKey: '',
            learningValue: '',
            learningLabel: '',
            learningShow: '',
            learningText: '',
            errorMsg: '',
            showAlert: false,
            showModal: false,
            ModalMessage: '',
        }
    }

    componentDidMount() {
        console.log(`props:`, this.props) // eslint-disable-line
        const {
            getSelectList,
        } = this.props

        getSelectList()
    }

    handleShowModal = () => {
        this.setState({
            showModal: true,
        })
    }

    handleSelectValueChange = (e) => {
        this.setState({selectValue: e,})
    }

    handleLearningKeyChange = (e) => {
        this.setState({learningKey: e.target.value,})
    }

    handleLearningValueChange = (e) => {
        this.setState({learningValue: e.target.value,})
    }
    handleLearningLabelChange = (e) => {
        this.setState({learningLabel: e.target.value,})
    }
    handleLearningShowChange = (e) => {
        this.setState({learningShow: e.target.value,})
    }
    handleLearningTextChange = (e) => {
        this.setState({learningText: e.target.value,})
    }


    handleSubmit = () => {
        console.log(`handleSubmit`) // eslint-disable-line
        const {
            LearningSubmit,
        } = this.props
        const {
            selectValue,
            learningKey,
            learningValue,
            learningLabel,
            learningShow,
        } = this.state

        if (!selectValue) {
            this.setState({errorMsg: '请选择所属类型', showAlert: true,})
        } else if (!learningKey) {
            this.setState({errorMsg: '请填写学习目标key', showAlert: true,})
        } else if (!learningValue) {
            this.setState({errorMsg: '请填写学习目标Value', showAlert: true,})
        } else if (!learningLabel) {
            this.setState({errorMsg: '请填写学生端标签', showAlert: true,})
        } else if (!learningShow) {
            this.setState({errorMsg: '请填写学习目标二级展示', showAlert: true,})
        } else {
            LearningSubmit({
                selectValue,
                learningKey,
                learningValue,
                learningLabel,
                learningShow,
            })
        }

        setTimeout(() => {
            this.setState({showAlert: false,})
        }, 3000)
    }
    handleOk = () => {
        const {receiveSubmit,} = this.props

        receiveSubmit(0)
    }

    render() {
        const {fetching, items, submitResult, ModalMessage,} = this.props.LearningTargetState
        const {
            selectValue,
            learningKey,
            learningValue,
            learningLabel,
            learningShow,
            learningText,
            errorMsg,
            showAlert,
        } = this.state

        return (
            <Row>
                <Col span={4}/>
                <Col className="form" span={16}>
                    { fetching ? <div>loading...<br/><br/><br/></div> : null }
                    {showAlert ? <Alert message={errorMsg} type="error" showIcon/> : null}
                    <Modal
                        title="提示"
                        visible={submitResult && submitResult !== 0}
                        onOk={this.handleOk}
                        okText="好的"
                    >
                        <p>{ModalMessage}</p>
                    </Modal>
                    <div className="title">
                        基本信息配置
                        <Button className="button" icon="rollback">返回</Button>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formSelectLayout}
                            label="所属类型"
                            hasFeedback
                            required={require}
                        >
                            <Select
                                defaultValue="0"
                                value={selectValue}
                                onChange={this.handleSelectValueChange}>
                                <OptionItem
                                    key="0"
                                >未选择</OptionItem>
                                {items && items.map((value) => {
                                    return (<OptionItem key={value.id} value={value.id}>{value.title}</OptionItem>)
                                })}
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="学习目标key"
                            hasFeedback
                            required={require}
                            wrapperCol={{
                                xs: {span: 24,},
                                sm: {span: 2,},
                            }}
                        >
                            <Input value={learningKey} onChange={this.handleLearningKeyChange}/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="学习目标value"
                            hasFeedback
                            required={require}
                        >
                            <Input value={learningValue} onChange={this.handleLearningValueChange}/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="学习目标学生端标签"
                            hasFeedback
                            required={require}
                        >
                            <Input value={learningLabel} onChange={this.handleLearningLabelChange}/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="学习目标学生端二级示例"
                            hasFeedback
                            required={require}
                        >
                            <Input value={learningShow} onChange={this.handleLearningShowChange}/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="备注"
                            hasFeedback
                            required={!require}
                        >
                            <Input
                                value={learningText}
                                onChange={this.handleLearningTextChange}
                                type="textarea"
                                autosize={{minRows: 5, maxRows: 10,}}/>
                        </FormItem>

                        <Button className="button" type="primary" icon="save" onClick={this.handleSubmit}>保存</Button>
                        <Button className="button" icon="rollback">返回</Button>
                    </Form>
                </Col>
                <Col span={4}/>
            </Row>
        )
    }

}

export default LearningTargetView

