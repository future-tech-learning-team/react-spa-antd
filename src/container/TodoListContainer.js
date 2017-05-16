/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import './TodoListContainer.pcss'
import React, { Component, } from 'react'
import action from '../action'
// import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

import { Form, Input, Icon, Select, Button,Modal,message, } from 'antd'
const FormItem = Form.Item

@connect(
    state => ({
        StudyInfo: state.StudyInfo,
    }),
    action.StudyInfo,
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
class TodoListContainer extends Component {
    constructor(props) {
        super(props)
        this.inCatalogType = ""
    }

    componentWillReceiveProps=() => {
        if (this.props.StudyInfo.success) {
            message.success(this.props.StudyInfo.msg)
        } else if (!this.props.StudyInfo.success && this.props.StudyInfo.errorMsg) {
            message.error(this.props.StudyInfo.errorMsg)
        }
    }

    handleCatalogTypeChange = (value) => {
        this.inCatalogType = value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const catalogType = this.inCatalogType
        const studyDisKey = document.getElementById("studyDisKey").value
        const studyDisValue = document.getElementById("studyDisValue").value
        const studyDisTag = document.getElementById("studyDisTag").value
        const studyDisTwoLevelShow = document.getElementById("studyDisTwoLevelShow").value
        const remark = document.getElementById("remark").value

        if (!catalogType) {
            Modal.error({
                title: '提示',
                content: '请选择所属类型',
            })
        } else if (!studyDisKey) {
            Modal.error({
                title: '提示',
                content: '请输入学习目标key',
            })
        } else if (!studyDisValue) {
            Modal.error({
                title: '提示',
                content: '请输入学习目标value',
            })
        } else if (!studyDisTag) {
            Modal.error({
                title: '提示',
                content: '请输入学习目标学生端标签',
            })
        } else {
            const data = {
                catalogType,
                studyDisKey,
                studyDisValue,
                studyDisTag,
                studyDisTwoLevelShow,
                remark,
            }

            this.props.studySubData(data)
        }
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 28, },
                sm: { span: 8, },
            },
            wrapperCol: {
                xs: { span: 28, },
                sm: { span: 16, },
            },
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1 style={{"line-height": "55px",height: "55px",}}>基本信息配置 <Button><Icon type="rollback" />返回</Button></h1>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <span style={{color: "red",}}>*</span>
                            &nbsp;所属类型</span>
                    )}>
                    <Select defaultValue="" id="catalogType" style={{ width: 150, }} onChange={this.handleCatalogTypeChange}>
                        <Option value="">--请选择--</Option>
                        <Option value="1">人群信息1</Option>
                        <Option value="2">人群信息2</Option>
                        <Option value="3">人群信息3</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <span style={{color: "red",}}>*</span>
                            &nbsp;学习目标key</span>
                    )}
                >

                    <Input type="text" id="studyDisKey" style={{ width: 80, }} />

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <span style={{color: "red",}}>*</span>
                            &nbsp;学习目标value</span>
                    )}
                >
                    <Input id="studyDisValue" placeholder="请输入学习目标value"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <span style={{color: "red",}}>*</span>
                            &nbsp;学习目标学生端标签</span>
                    )}
                >
                    <Input id="studyDisTag" placeholder="请输入学习目标学生端标签value"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="学习目标学生端二级展示"
                >
                    <Input id="studyDisTwoLevelShow" placeholder="请输入学习目标学生端二级展示value"/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="备注"
                >
                    <Input type="textarea" id="remark" rows={4} cols={8} placeholder="请输入备注"/>
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.props.StudyInfo.fetching} size="large"><Icon type="save" />{this.props.fetching}保存</Button><Button style={{"margin-left": 10,}}><Icon type="rollback" />返回</Button>
                </FormItem>
            </Form>
        )
    }
}
const WrappedRegistrationForm = Form.create()(TodoListContainer)

export default WrappedRegistrationForm
