
// import { Mongo } from 'meteor/mongo';
import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';


export const Tasks = new MongoObservable.Collection<Task>('tasks');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
      return Tasks.find();
    });
}
   
