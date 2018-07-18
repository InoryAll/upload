/**
 * 核心页面
 * Created by tianrenjie on 2018/7/18
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Upload, Icon, message, Table } from 'antd';
import connect from 'react-redux';
import './main.less';

const FormItem = Form.Item;

const UploadForm = Form.create()((props) => {
  
  const Dragger = Upload.Dragger;
  const { getFieldDecorator } = props.form;
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };
  
  const uploadProps = {
    name: 'file',
    multiple: true,
    action: '//localhost:3000/upload',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        console.log(info);
        message.success(`${info.file.name} 文件上传成功.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    },
  };
  
  const handleSubmit =(e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if(!err) {
        // console.log(values);
      }
    });
  };
  
  return (
    <div className="upload-form">
      <Form onSubmit={handleSubmit}>
        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('upload', {
            rules: [],
          })(
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击或者拖拽上传</p>
              <p className="ant-upload-hint">支持多个上传</p>
            </Dragger>,
          )}
        </FormItem>
      </Form>
    </div>
  );
});

class Main extends React.Component {
  static propTypes = {
  
  };
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
  
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <div className="upload">
        <Row>
          <Col span={24}>
            <UploadForm {...this.props} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="upload-table">
              <Table
                columns={columns}
                dataSource={dataSource}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = {

};

export default connect()(Main);
