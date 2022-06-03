<template>
  <div class="sorterManage__warpper">
    <div class="filter__box">
      姓名：
      <Input v-model="value" style="width: 200px" />
      <Button style="margin-left: 10px">搜索</Button>
      <Button style="margin-left: 10px" type="primary" @click="addItem"
        >新增</Button
      >
    </div>
    <div class="view">
      <Table :columns="columns" :data="tableData">
        <template slot-scope="{ row }" slot="action">
          <Button
            style="margin-left: 10px"
            type="error"
            @click="openDeleteModel"
            >删除</Button
          >
          <Button
            style="margin-left: 10px"
            type="primary"
            @click="editItem(row)"
            >编辑</Button
          >
        </template>
      </Table>
      <div class="page__tools">
        <Page @on-change="changePage" :total="total" show-total />
      </div>
    </div>
    <Modal
      v-model="modalInfo.status"
      title="编辑业务员信息"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <FormItem label="姓名" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="性别" prop="password">
            <RadioGroup v-model="phone">
              <Radio label="apple">
                  <span>男</span>
              </Radio>
              <Radio label="android">
                  <span>女</span>
              </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="电话" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="备注" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="入职时间" prop="password">
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="离职时间" prop="password">
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="deleteModal.status" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>提示</span>
      </p>
      <div style="text-align: center">
        <p>是否确认删除</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteSumbit"
          >删除</Button
        >
      </div>
    </Modal>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: "sorterManage",
  data() {
    return {
      data2: this.getMockData(),
      targetKeys2: this.getTargetKeys(),
      total: 100,
      googsSourceOption: [
        {
          label: "渠道",
          value: 0,
        },
        {
          label: "代理商",
          value: 1,
        },
      ],
      deleteModal: {
        status: false,
        data: {},
      },
      sorterManageOption: [
        {
          value: "张三",
          label: "张三",
        },
      ],
      modalInfo: {
        status: false,
        data: {},
      },
      columns: [
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "地址",
          key: "age",
        },
        {
          title: "电话",
          key: "address",
        },
        {
          title: "操作",
          slot: "action",
          key: "action",
          width: 200
        },
      ],
      tableData: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
      ],
    };
  },
  mounted () {
    setTimeout(() => {
      this.createWeightChart();
      this.heiLiaoChart();
    }, 1000)
  },
  methods: {
                getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            },
    heiLiaoChart () {
      const heiliao__chart = echarts.init(document.querySelector('.heiliao__chart'));
      const option = {
        xAxis: {
          type: 'category',
          data: ['张三', '张三', '张三', '张三', '张三', '张三', '张三']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      heiliao__chart.setOption(option);
    },
    createWeightChart () {
      const weight__chart = echarts.init(document.querySelector('.weight__chart'));
      const option = {
        xAxis: {
          type: 'category',
          data: ['张三', '张三', '张三', '张三', '张三', '张三', '张三']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      weight__chart.setOption(option);
    },
    deleteSumbit() {
      this.deleteModal.status = false;
    },
    openDeleteModel() {
      this.deleteModal.status = true;
    },
    changePage(page) {
      console.log(page);
    },
    editItem() {
      this.modalInfo.status = true;
    },
    addItem() {
      this.modalInfo.status = true;
    },
  },
};
</script>
<style scoped>
.sorterManage__warpper {
}
.chart__warpper {
  height: 400px;
  width: 100%;
  display: flex;
}
.time__filter {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
.weight__chart--box {
  height: 100%;
  flex: 1;
}
.weight__chart {
  height: 80%;
}
.heiliao__chart {
  height: 80%;
}
.page__tools {
  background: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>