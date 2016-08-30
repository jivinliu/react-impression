import classnames from 'classnames';
import { Link } from 'react-router';
import React, { PureComponent, PropTypes } from 'react';
import Icon from './Icon';

/**
 * 面包屑组件.
 */
export default class Breadcrumb extends PureComponent{
    //prop type校验
    static propTypes = {
        //分隔
        divider: PropTypes.string,
        //路由
        routes: PropTypes.arrayOf(PropTypes.object).isRequired,
        //自定义样式
        className: PropTypes.string,
    }
    /**
     * 设置浏览器title.
     */
    setDocumentTitle(){
        let { routes } = this.props,
            leafRoute = routes[routes.length - 1];

        document.title = leafRoute.name || leafRoute.component && leafRoute.component.title || leafRoute.path;
    }
    //渲染
    render(){
        let { divider, routes, className, ...others } = this.props,
            dividerClass = divider? `breadcrumb-${divider}`: '',
            depth = routes.length - 1;

        this.setDocumentTitle();

        return (
            <ol {...others} className={classnames('breadcrumb', className, dividerClass)}>
                { routes.map((item, index) =>
                    <li key={index} className="breadcrumb-item">
                        { index < depth && item.path &&
                            <Link to={item.path}>
                                {item.component && item.component.icon &&
                                    <Icon className="breadcrumb-item-addon" type={item.component.icon}/>
                                }
                                { item.component && item.component.title || item.name}
                            </Link>
                        }
                        { (index === depth || !item.path) &&
                            <span>
                                {item.component && item.component.icon &&
                                    <Icon className="breadcrumb-item-addon" type={item.component.icon}/>
                                }
                                {item.icon}
                                { item.component && item.component.title || item.name}
                            </span>
                        }
                    </li>
                )}
            </ol>
        );
    }
}
