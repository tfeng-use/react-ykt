import React,{ PureComponent } from 'react'
import BaseScroll from '@/components/baseScroll.js'
import SideBar from '@/components/sideBar.js'
import { OrganClassifyWrapper, OrganItem } from '../style.js'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import { imgUrl } from '@/common/js/global.js'
import NoResult from '@/components/noResult'
// import status from '@/common/image/status.png'

class OrganClassify extends PureComponent {
  constructor (props) {
    super(props);
    this.getOrganTypeList = this.getOrganTypeList.bind(this);
    this.getCurrentOrgan = this.getCurrentOrgan.bind(this);
    this.getOrganLabels = this.getOrganLabels.bind(this);
  }
  componentDidMount () {
    this.props.getOrganType();
  }
  componentDidUpdate () {
    if (this.scrollRefLeft) {
      this.scrollRefLeft._refresh();
      this.scrollRefLeft.hideLoading();
    }
    if (this.scrollRefRight) {
      this.scrollRefRight._refresh();
      this.scrollRefRight.hideLoading();
    }
  }
  // 获取左边的机构类别列表
  getOrganTypeList () {
    if (this.props.organTypeList.toJS().length > 0) {
      return (
        <div className="organ-classify-left">
          <BaseScroll 
            ref={scroll => (this.scrollRefLeft = scroll)}
            styleProp={{
              height: 'calc(100vh - 8.75rem)',
              overflow: 'hidden'
            }}>
            <SideBar 
              list={this.props.organTypeList.toJS()} 
              currentId={this.props.currentOrganTypeId} 
              handleBar={(id) => this.props.handleSetId(id)}>
            </SideBar>  
          </BaseScroll>
        </div>
      )
    } else {
      return <NoResult></NoResult>
    }
  }

  // 获取机构标签
  getOrganLabels (item) {
    let arr = item.get('orgLabelNames');
    if (!arr) {
      return null
    } else {
      let arrtemp = arr.split(',');
      return (
        arrtemp.map(ele => {
          return (
            <span key={ele}>{ele}</span>
          )
        })
      )
    }
  }

  getCurrentOrgan () {
    if (this.props.currentOrgan.toJS().length > 0) {
      return (
        <div className="organ-classify-right">
          <BaseScroll 
            ref={scroll => (this.scrollRefRight = scroll)}
            styleProp={{
              height: 'calc(100vh - 8.75rem)',
              overflow: 'hidden'
            }}>
            <div>
              {
                this.props.currentOrgan.map(item => {
                  return (
                    <OrganItem key={item.get('id')}>
                      <img src={imgUrl + item.get('orgHeaderImgPath')} alt=""/>
                      <div className="right">
                        <p className="name">{item.get('orgName')}</p>
                        <p className="labels">
                          {
                            this.getOrganLabels(item)
                          }
                        </p>
                      </div>
                    </OrganItem>
                  )
                })
              }   
            </div>
          </BaseScroll>  
        </div>
      )
    } else {
      let wrapperProp = {
        width: '100%',
        textAlign: 'center',
        marginTop: '7rem',
        overflow: 'hidden',
        flex: 1,
        marginLeft: '2.5rem'
      }
      let imgProp = {
        width: '16rem',
        height: '16rem',
      }
      return (
        <NoResult wrapperProp={wrapperProp} imgProp={imgProp}></NoResult>
      )
    }
  }

  render () {
    return (
      <OrganClassifyWrapper>
        {this.getOrganTypeList()}
        {this.getCurrentOrgan()}
      </OrganClassifyWrapper>
    )
  }
}

const mapState = (state) => ({
  organTypeList: state.getIn(['find', 'organTypeList']),
  currentOrgan: state.getIn(['find', 'currentOrgan']),
  currentOrganTypeId: state.getIn(['find', 'currentOrganTypeId']),
  organPageNo: state.getIn(['find', 'organPageNo']),
})

const mapDispatch = (dispatch) => ({
  // 切换机构类型类型
  handleSetId (id) {
    dispatch(actionCreators.getCurrentOrganTypeIdAction(id, 1))
  },
  // 上拉加载
  getOrganList (id, pageNo) {
    dispatch(actionCreators.getCurrentOrganTypeIdAction(id, pageNo))
  },
  // 获取机构类型
  getOrganType () {
    dispatch(actionCreators.getOrganTypeAction())
  }
})

export default connect(mapState, mapDispatch)(OrganClassify)