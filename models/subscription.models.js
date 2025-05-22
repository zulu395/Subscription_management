import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    price:{
        tyupe: Number,
        required: [true, 'subscription price is required'],
        min: 0,
    },
    currency: {
        type: String,
        required: [true, 'subscription currency is required'],
        enum: ['USD', 'EUR', 'GBP', 'JPY', 'INR'], // Add more currencies as needed
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'], // Add more frequencies as needed
    },
    category: {
        type: String,
        enum: ['basic', 'premium', 'enterprise'], // Add more categories as needed
        required: [true, 'subscription category is required'],
    },
    paymentMethod: {
        type: String,
        enum: ['credit_card', 'paypal', 'bank_transfer'], // Add more payment methods as needed
        required: [true, 'subscription payment method is required'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'], // Add more statuses as needed
        default: 'active',
    },
    startDate:{
        type: Date,
        required: [true, 'subscription start date is required'],
        validate:{
            validator: function(value) {
                return value > this.startDate;
            },
            message: 'Start date must be in the past or present',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user id is required'],
        index: true,
    }
   
},{timestamps: true});

//auto calculate the renewal date
 
subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
     
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    };

    if(this.renewalDate < new Date()){
    this.status = 'expired'
}
next();

})
const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
