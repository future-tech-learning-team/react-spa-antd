/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import StudyTest from '../component/StudyTest'  // component文件夹 下拉数据用的用子组件
import action from '../action'
import { Form, Input, Button, message, Modal, Spin,} from 'antd'
const FormItem = Form.Item

// 问题1： select 列表数据加载太慢； 问题2 ：不用setState()能否实现表单判空

@connect(
    state => ({
        todoList: state.toStudyList,  // reducer文件夹下，index.js中的对象toStudyList （存在于todoListTest.js）
    }),
    action.toStudy,  // action 文件夹下，index.js中的对象toStudy（存在于toStudy.js）
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

class StudyListContainer extends Component {  // 4
    constructor(props) {
        super(props)
        this.state = {
            loading: false,  // 保存按钮加载
            boxTitle: '保存学习目标',
            selectedValue: '所属类型',
            learnTarget: '',
            learnClient: '',
            learnIndex: '',
        }
    }

    componentDidMount() {
        const {
            getStudyList,
        } = this.props

        getStudyList()  // 获取select数据
    }

    handleSelectChange = (e) => { // select
        this.setState({ // eslint-disable-line
            selectedValue: e,
        })
    }
    handleTargetValue = (e) => {
        this.setState({ // eslint-disable-line
            learnTarget: e.target.value,
        })
    }
    handleLearnClientValue = (e) => {
        this.setState({ // eslint-disable-line
            learnClient: e.target.value,
        })
    }
    handleLearnIndexValue = (e) => {
        this.setState({ // eslint-disable-line
            learnIndex: e.target.value,
        })
    }

    // form 提交
    handleSubmit = () => {
        const {
            boxTitle,
            selectedValue,
            learnTarget,
            learnClient,
            learnIndex,
        } = this.state

        if (selectedValue === '所属类型') {
            Modal.warning({
                title: boxTitle,
                content: "请填写所属类型",
            })
        } else if (!learnTarget) {
            Modal.warning({
                title: boxTitle,
                content: "请填写学习指标key",
            })
        } else if (!learnClient) {
            Modal.warning({
                title: boxTitle,
                content: "学习指标商户端标签",
            })
        } else if (!learnIndex) {
            Modal.warning({
                title: boxTitle,
                content: "学习指标value",
            })
        } else {
            this.setState({ // eslint-disable-line
                loading: true,
            })
            setTimeout(() => {
                this.setState({ // eslint-disable-line
                    loading: false,
                })
                message.success('操作成功!')  // 调用成功弹框
            },2000)
        }
    }

    render() {
        const {
            todoList: {
                tostudy,
                fetching,
            },
        } = this.props

        console.log(this.props) // eslint-disable-line

        // todoList 是 reducer 文件夹下的 initialState 对象
console.log(this.props.todoList) // eslint-disable-line
        const {
            learnTarget,
            selectedValue,
            learnClient,
            learnIndex,
        } = this.state

        // console.log(tostudy.length) // eslint-disable-line

        const formItemLayout = {
            labelCol: { span: 6, },
            wrapperCol: { span: 12, },
        }

        return (
            <div className="todo-list">
                <span style={{fontSize: 20,}}>基本信息配置 <Button icon="rollback" style={{ marginLeft: 10,}}>返回</Button></span>
                <br/>
                <br/>
                <br/>
                { fetching ? <div style={{position: "absolute",left: "45%",}}><Spin/></div> : null }

                <Form>
                    <StudyTest
                        selectValue={selectedValue}
                        onChange={this.handleSelectChange}
                        options={tostudy} />
                    <FormItem
                        id="control-input"
                        label="学习指标key"
                        {...formItemLayout}
                        required>
                        <Input id="control-input" placeholder="学习指标key" value={learnTarget} onChange={this.handleTargetValue}/>
                    </FormItem>
                    <FormItem
                        id="control-input2"
                        label="学习指标商户端标签"
                        {...formItemLayout}
                        required>
                        <Input id="control-input2" placeholder="学习指标商户端标签" value={learnClient} onChange={this.handleLearnClientValue}/>
                    </FormItem>
                    <FormItem
                        id="control-input3"
                        label="学习指标value"
                        {...formItemLayout}
                        required>
                        <Input id="control-input3" placeholder="学习指标value" value={learnIndex} onChange={this.handleLearnIndexValue}/>
                    </FormItem>
                    <FormItem
                        id="control-input4"
                        label="学习指标商户端标签"
                        {...formItemLayout}>
                        <Input id="control-input4" placeholder="学习指标商户端标签" />
                    </FormItem>
                    <FormItem
                        id="control-input5"
                        label="学习指标商户端二级展示"
                        {...formItemLayout}>
                        <Input id="control-input5" placeholder="学习指标商户端二级展示" />
                    </FormItem>
                    <FormItem
                        id="control-textarea"
                        label="备注"
                        {...formItemLayout}>
                        <Input type="textarea" id="control-textarea" placeholder="备注" rows="10"/>
                    </FormItem>
                </Form>
                <FormItem wrapperCol={{ span: 11, offset: 3, }} style={{ marginTop: 24, }}>

                    <Button type="primary" icon="save" htmlType="submit" onClick={this.handleSubmit} loading={this.state.loading}>保存</Button>
                    <Button icon="rollback" style={{ marginLeft: 24, }}>返回</Button>
                </FormItem>
            </div>
        )
    }
}

export default StudyListContainer
