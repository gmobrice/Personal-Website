import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './Timeline.scss';
import { Row, Col } from 'reactstrap';

export class Timeline extends Component
{
    render()
    {
        return (
        <div className="timeline">
            <ul>
                <li>
                    <a href="javascript:;">
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2015</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2017</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Brasoftware</span>
                        <span className="year">2019</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <FontAwesomeIcon icon={ faCircle } size="xs" />
                        <span>Microsoft</span>
                        <span className="year">2019</span>
                    </a>
                </li>
            </ul>
            <Row>
                <Col xs={12}>
                    <h4>Title</h4>
                    <h6>Subtitle</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nulla nec velit vehicula commodo. Fusce pellentesque arcu vel dictum fringilla. Suspendisse at lobortis neque. Vivamus dictum erat et mi bibendum venenatis. Quisque id lacus sapien. Etiam tempor tortor elit, at ornare erat fermentum tristique. Vestibulum rhoncus risus sed odio gravida, eu auctor justo bibendum. Nunc rhoncus ex lorem, nec suscipit quam ullamcorper nec. Pellentesque eu porta purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nulla at risus hendrerit pretium sed vel risus. Nunc eget sollicitudin dui, ac semper risus. Sed euismod congue tellus vel rutrum. Nulla eget urna augue. Vestibulum vitae luctus odio, vitae consequat eros. Aliquam volutpat ligula a tincidunt varius.
                    </p>
                </Col>
            </Row>
        </div>
        )
    }
}