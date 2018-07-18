/**
 * 核心页面
 * Created by tianrenjie on 2018/7/18
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Upload, Icon, message, Table, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import { Link } from 'react-router';
import moment from 'moment';
import './main.less';
import { fileListSelector } from '../selector/selector';
import { getFileList } from '../action/action';

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
    getFileList: PropTypes.func.isRequired,
    fileList: PropTypes.object.isRequired,
  };
  state= {
    visible: false,
    QRCodeUrl: null,
  };
  componentWillMount() {
    const { getFileList }  = this.props;
    getFileList();
  }
  handleQRClick = (record) => {
    this.setState({
      QRCodeUrl: record.path,
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const dataSource = this.props.fileList && this.props.fileList.data;
    const columns = [{
      title: '文件名',
      dataIndex: 'fileName',
      key: 'fileName',
      render: (text, record) => {
        return <Link to={record.path}>{text}</Link>;
      },
    }, {
      title: '日期',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text, record) => {
       return text && moment(parseInt(text)).format('YYYY-MM-DD HH:mm:ss');
      },
    }, {
      title: '二维码',
      dataIndex: 'qcode',
      key: 'qcode',
      render: (text, record) => {
        return (<Link className="QRCode-link" onClick={() => { this.handleQRClick(record); }}><Icon type="qrcode" /></Link>);
      },
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return (<Button type="primary">操作</Button>);
      },
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
        <Row>
          <Modal
            className="upload-modal"
            title={null}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <QRCode value={this.state.QRCodeUrl} />,
          </Modal>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fileList: fileListSelector(state),
  };
};

const mapDispatchToProps = {
  getFileList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
