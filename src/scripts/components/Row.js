import classnames from 'classnames';
import React, { PureComponent } from 'react';

/**
 * Row组件.
 */
export default class Row extends PureComponent {
    /**
     * 自动计算col属性.
     * @return {[Array]} [子元素]
     */
    getChildren(){
        let { children } = this.props,
            count = 0,
            allocation = 0;

        React.Children.forEach(children, ({ props }) => {
            if(props.hasOwnProperty('col')){
                count += Number.parseInt(props.col);
            }else{
                allocation += 1;
            }
        });

        let surplus = 12 - count;

        return React.Children.map(children, (child, index) => {
            let { col } = child.props;

            return React.cloneElement(child, {
                key: index,
                col: col || Number.parseInt(surplus / allocation),
            });
        });
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        children = this.getChildren();
        return(
           <div {...others} className={classnames('row', className)}>
                {children}
           </div>
        );
    }
}
