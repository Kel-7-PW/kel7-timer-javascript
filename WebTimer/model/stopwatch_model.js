const {Op,Model, DataTypes, Sequelize,QueryTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:pass123@localhost:5432/stopwatch');
 
//tabel stopwatch
 
const myStopwatch = sequelize.define('split', {
    id_split:{
        type:DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
    },
    index:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    time:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    id_stopwatch:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    schema:"public",
    tableName:"split",
    timestamps:false
})
 
 
const myStopwatchTitle = sequelize.define('title', {
    id_title:{
        type:DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
    },
    title_task:{
        type:DataTypes.STRING,
        allowNull:true
    },
   
    id_stopwatch:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    schema:"public",
    tableName:"title",
    timestamps:false
})
 

const myStopwatchRecord = sequelize.define('final_record', {
    id_record:{
        type:DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true
    },
    total_waktu:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    selisih_akhir:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
   
    id_stopwatch:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    schema:"public",
    tableName:"final_record",
    timestamps:false
});
 
class StopwatchModel {
    //GET SPLIT
    getSplitTime=(extras)=>{
        return myStopwatch.findAll({
            where:{
                id_stopwatch:extras.id_stopwatch
            },
            order:[
                ['index','desc']
            ]
        })
    }
    //CREATE SPLIT
    createSplitTime=(extras)=>{
        return myStopwatch.create(extras,{
            fields:Object.keys(extras)
        }
        )
    }
 
    //DELETE SPLIT
    deleteSplitTime=(extras)=>{
        return myStopwatch.destroy({
            where:{
                id_stopwatch:extras.id_stopwatch
            }
        }
        )
    }
 
    //GET TITLE
    getTitle=(extras)=>{
        return myStopwatchTitle.findOne({
            where:{
                id_stopwatch:extras.id_stopwatch
            },
 
           
        })
    }
    //CREATE TITLE
    createTitle=(extras)=>{
        return myStopwatchTitle.create(extras,{
            fields:Object.keys(extras)
        }
        )
    }
 
    //UPDATE TITLE
    updateTitle=(extras)=>{
        return myStopwatchTitle.update({
            title_task:extras.title_task
        },{
            where:{
                id_stopwatch:extras.id_stopwatch
            }
        }
        )
    }
 
    //DELETE SPLIT
    deleteRecord=(extras)=>{
        return myStopwatchRecord.destroy({
            where:{
                id_stopwatch:extras.id_stopwatch
            }
        }
        )
    }

    //GET RECORD
    getRecord=(extras)=>{
        return myStopwatchRecord.findOne({
            where:{
                id_stopwatch:extras.id_stopwatch
            }
        })
    }
    
    //CREATE RECORD
    createRecord=(extras)=>{
        return myStopwatchRecord.create(extras,{
            fields:Object.keys(extras)
        }
        )
    }
 
    //UPDATE RECORD
    updateRecord=(extras)=>{
        return myStopwatchRecord.update({
            total_waktu:extras.total_waktu,
            selisih_akhir:extras.selisih_akhir
        },{
            where:{
                id_stopwatch:extras.id_stopwatch
            }
        }
        )
    }


}
module.exports = StopwatchModel;
