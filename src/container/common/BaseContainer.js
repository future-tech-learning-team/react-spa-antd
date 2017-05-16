/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import './BaseContainer.pcss'
import React, {PropTypes, PureComponent, cloneElement,} from 'react'
import { Row, Col, } from 'antd'

class BaseContainer extends PureComponent {

    static defaultProps = {
        children: [],
        location: '',
    }

    static propTypes = {
        children: React.PropTypes.node,
        location: PropTypes.object,
    };

    render() {
        const {
            children,
            location,
        } = this.props

        return (
            <div className="base">
                <header className="act-mp-header clearfix">
                    <Row gutter={16} type="flex" justify="space-between">
                        <Col sm={6} style={{minWidth: 280,}}>
                            <a className="logo" href={'#'}>学习配置平台</a>
                        </Col>
                        <Col sm={10} className="nav">
                            <div/>
                        </Col>
                        <Col sm={4} >
                            <div/>
                        </Col>
                    </Row>
                </header>
                <div style={{margin: "0 50px",border: "1px solid #ccc","border-radius": "5px",}}>
                    <div className="content" style={{ width: "540px",margin: "auto", }}>
                        {cloneElement(children, {
                            key: location.pathname,
                        })}
                    </div>
                </div>
                <footer className="act-mp-footer">
                    <span>©Copyright {(new Date()).getFullYear()} 学习小组</span>
                    &nbsp;&nbsp;&nbsp;
                </footer>
            </div>
        )
    }

}

export default BaseContainer
