### 示例

**基本用法**

```js
initialState = {
  showConfirm1: false,
  showConfirm2: false,
  showConfirm3: false,
}
const toggleConfirm1Handle = () => {
  setState({
    showConfirm1: !state.showConfirm1,
  })
}
const toggleConfirm2Handle = () => {
  setState({
    showConfirm2: !state.showConfirm2,
  })
}
const toggleConfirm3Handle = () => {
  setState({
    showConfirm3: !state.showConfirm3,
  })
}
;<div>
  <Row>
    <Col>
      <Button theme="secondary" onClick={toggleConfirm1Handle}>
        警告
      </Button>
    </Col>
    <Col>
      <Button theme="primary" onClick={toggleConfirm2Handle}>
        信息
      </Button>
    </Col>
    <Col>
      <Button theme="default" onClick={toggleConfirm3Handle}>
        危险
      </Button>
    </Col>
  </Row>
  {state.showConfirm1 && (
    <Confirm
      onOkClick={toggleConfirm1Handle}
      onCancelClick={toggleConfirm1Handle}
    >
      您确定删除消费记录？
    </Confirm>
  )}
  {state.showConfirm2 && (
    <Confirm
      type="info"
      onOkClick={toggleConfirm2Handle}
      onCancelClick={toggleConfirm2Handle}
    >
      您确定购买该航班机票？
    </Confirm>
  )}
  {state.showConfirm3 && (
    <Confirm
      type="danger"
      onOkClick={toggleConfirm3Handle}
      onCancelClick={toggleConfirm3Handle}
    >
      您确定注销该银行卡？
    </Confirm>
  )}
</div>
```

**变更记录**

v2.0.0

* 移除 confirm-btn-padding sass 变量
* 移除 confirm-btn-hover-bg sass 变量
* 移除 confirm-btn-primary-color sass 变量
* 新增 confirm-footer-btn-margin sass 变量
* 新增 confirm-dialog-min-height sass 变量
