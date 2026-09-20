import { Level } from '../../types';

export const level1: Level = {
  id: 1,
  slug: 'python-for-ml',
  title: {
    en: 'Level 1 — Python for Machine Learning',
    bn: 'লেভেল ১ — মেশিন লার্নিংয়ের জন্য পাইথন',
  },
  subtitle: {
    en: 'The core programming toolkit: Data structures, OOP, environments, and notebooks',
    bn: 'প্রয়োজনীয় পাইথন দক্ষতা: ডেটা স্ট্রাকচার, ফাংশন, ওওপি ও জুপিটার নোটবুক',
  },
  description: {
    en: 'Master the practical Python syntax required to handle datasets, build pipelines, manipulate matrices, and train machine learning models effortlessly.',
    bn: 'মেশিন লার্নিং মডেল তৈরি ও ডেটাসেট প্রসেস করার জন্য পাইথনের যে যে অংশ বাস্তবে কাজে লাগে তা সহজ উদাহরণ ও কোড সহ শিখুন।',
  },
  iconName: 'Code',
  color: 'from-blue-500 to-indigo-600',
  badge: 'Python Toolkit',
  lessons: [
    {
      id: 'l1-variables-types',
      levelId: 1,
      slug: 'variables-data-types',
      title: {
        en: 'Variables, Types, and Basic Operators',
        bn: 'ভেরিয়েবল, ডেটা টাইপ এবং অপারেটর',
      },
      subtitle: {
        en: 'Integers, floats, booleans, strings, and mathematical assignments',
        bn: 'সংখ্যা, দশমিক, বুলিয়ান, স্ট্রিং এবং গাণিতিক হিসাব',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 15,
      category: 'Python Basics',
      whatIsIt: {
        en: 'Variables are labeled containers in computer memory used to store values like patient age, house price, or image dimensions.',
        bn: 'ভেরিয়েবল হলো কম্পিউটারের মেমরিতে তথ্য জমা রাখার জন্য একটি লেবেলযুক্ত পাত্র। যেমন রোগীর বয়স, পরীক্ষার নম্বর বা গাড়ির গতিবেগ জমা রাখা।',
      },
      analogy: {
        en: 'Think of variables as labeled plastic storage bins in your workshop. You can write "learning_rate" on the label and put "0.01" inside.',
        bn: 'রান্নাঘরের মসলার কৌটার মতো ভাবুন। কৌটার গায়ে লেখা "হলুদ", ভেতরে হলুদ গুঁড়ো রাখা। ভেরিয়েবলের নাম "student_score" এবং ভেতরের মান "95"।',
      },
      whyItMatters: {
        en: 'Machine learning algorithms deal with thousands of weights, biases, and hyperparameters. Understanding types prevents costly runtime crashes.',
        bn: 'মডেলের বিভিন্ন প্যারামিটার (যেমন লার্নিং রেট, ব্যাচ সাইজ) সংরক্ষণ করতে এবং ভুল ডেটা টাইপজনিত ত্রুটি এড়াতে এটি অপরিহার্য।',
      },
      howItWorks: {
        en: 'Python is dynamically typed: you assign with "=" and Python detects whether it is an integer (int), decimal (float), boolean (bool), or string (str).',
        bn: 'পাইথনে ভেরিয়েবলের টাইপ আগে থেকে ডিক্লেয়ার করতে হয় না; মান বসালেই পাইথন নিজে থেকে int, float, str বা bool হিসেবে বুঝে নেয়।',
      },
      practicalApplication: {
        en: 'Configuring model hyperparameters like learning_rate = 0.001 and max_epochs = 50.',
        bn: 'মডেলের গুরুত্বপূর্ণ হাইপারপ্যারামিটার নির্ধারণ করা।',
      },
      codeExample: {
        title: 'Core ML Data Types in Action',
        language: 'python',
        code: `# Hyperparameters for training
learning_rate = 0.001       # float
epochs = 100               # int
model_name = "RandomForest" # str
is_trained = False          # bool

print(f"Model: {model_name} | Type: {type(model_name)}")
print(f"LR: {learning_rate} | Type: {type(learning_rate)}")

# Converting types (Casting)
data_point = "150.75"
clean_number = float(data_point)
print("Numeric value:", clean_number * 2)`,
        expectedOutput: `Model: RandomForest | Type: <class 'str'>
LR: 0.001 | Type: <class 'float'>
Numeric value: 301.5`,
        explanation: {
          en: [
            'We define variables with expressive names corresponding to ML hyperparameter settings.',
            'type() inspects the internal representation.',
            'float() parses string numbers into calculable decimals.',
          ],
          bn: [
            'মডেলের হাইপারপ্যারামিটারের অর্থপূর্ণ নাম দিয়ে ভেরিয়েবল তৈরি করা হয়েছে।',
            'type() ফাংশন দিয়ে ভেরিয়েবলের ধরন দেখা যায়।',
            'float() দিয়ে স্ট্রিংকে দশমিকে রূপান্তর করে গাণিতিক গুণ করা হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Concatenating a string and a number directly: "Loss: " + 0.05 fails with TypeError.',
            bn: 'স্ট্রিংয়ের সাথে সরাসরি সংখ্যা যোগ করতে গিয়ে TypeError তৈরি করা।',
          },
          solution: {
            en: 'Use Python f-strings: f"Loss: {0.05}" which auto-formats numbers cleanly.',
            bn: 'পাইথন এফ-স্ট্রিং ব্যবহার করুন: f"Loss: {loss_value}"।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Calculate Mean Loss', bn: 'গড় লস হিসাব করুন' },
        instructions: {
          en: 'Declare loss1 = 0.45, loss2 = 0.35, loss3 = 0.20. Calculate and print their average.',
          bn: 'loss1 = 0.45, loss2 = 0.35, loss3 = 0.20 তিনটি ভেরিয়েবলের গড় প্রিন্ট করুন।',
        },
        hint: {
          en: 'Average = (loss1 + loss2 + loss3) / 3',
          bn: 'তিনটির যোগফলকে ৩ দিয়ে ভাগ করুন।',
        },
      },
      quiz: [
        {
          id: 'q1-types',
          question: {
            en: 'What is the data type of the expression: 4 / 2 in Python 3?',
            bn: 'পাইথনে 4 / 2 অপারেশনের পর ডেটা টাইপ কী হবে?',
          },
          type: 'multiple_choice',
          options: [
            { id: 'a', en: 'float (2.0)', bn: 'float (২.০)' },
            { id: 'b', en: 'int (2)', bn: 'int (২)' },
            { id: 'c', en: 'str ("2")', bn: 'str ("২")' },
          ],
          correctAnswerId: 'a',
          explanation: {
            en: 'In Python 3, standard single-slash division always returns a float (2.0). Double slash // is integer floor division.',
            bn: 'পাইথনে সাধারণ ভাগের ফল সবসময় দশমিক সংখ্যা (float) হয়। পূর্ণসংখ্যার ভাগের জন্য // ব্যবহার করতে হয়।',
          },
        },
      ],
      nextLessonId: 'l1-data-structures',
    },
    {
      id: 'l1-data-structures',
      levelId: 1,
      slug: 'data-structures-lists-dicts',
      title: {
        en: 'Data Structures: Lists, Tuples, Dictionaries, and Sets',
        bn: 'ডেটা স্ট্রাকচার: লিস্ট, টাপল, ডিকশনারি এবং সেট',
      },
      subtitle: {
        en: 'Organizing datasets, feature names, parameters, and unique labels',
        bn: 'ডেটাসেটের রো, কলাম, মডেল কনফিগ ও ইউনিক ভ্যালু পরিচালনা',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 20,
      category: 'Python Basics',
      whatIsIt: {
        en: 'Lists are ordered mutable collections [1, 2, 3]. Tuples are immutable snapshots (1, 2). Dictionaries store key-value pairs {"learning_rate": 0.01}. Sets store unique unordered items {1, 2}.',
        bn: 'লিস্ট হলো পরিবর্তনযোগ্য তালিকা [১, ২, ৩]। টাপল অপরিবর্তনশীল (১, ২)। ডিকশনারি চাবি ও মানের জোড়া {"নাম": "করিম"}। সেট সবসময় ইউনিক বা অনন্য মান রাখে {১, ২}।',
      },
      analogy: {
        en: 'A List is a grocery checklist where you can add or cross off items. A Dictionary is an English dictionary: search a word (key) to get its definition (value).',
        bn: 'লিস্ট হলো বাজারের ফর্দ যেখানে নতুন জিনিস লেখা বা মোছা যায়। ডিকশনারি হলো ফোনবুকের মতো: বন্ধুর নাম (কী) খুঁজলে তার মোবাইল নম্বর (ভ্যালু) পাওয়া যায়।',
      },
      whyItMatters: {
        en: 'Every ML dataset row is fundamentally a list of numbers, model configs are dictionaries, and target class labels are tracked with sets.',
        bn: 'মেশিন লার্নিংয়ের প্রতিটি ডেটা রো মূলত একটি লিস্ট, মডেলের কনফিগারেশন ডিকশনারি, এবং ইউনিক ক্লাসের তালিকা সেটের মাধ্যমে দ্রুত জানা যায়।',
      },
      howItWorks: {
        en: 'Square brackets [] for lists, curly braces with colons {k: v} for dicts, parentheses () for tuples, and plain curly braces {x} for sets.',
        bn: 'লিস্টের জন্য থার্ড ব্র্যাকেট [], ডিকশনারির জন্য সেকেন্ড ব্র্যাকেট ও কোলন {কী: ভ্যালু}, এবং সেটের জন্য {উপাদান} ব্যবহার করা হয়।',
      },
      practicalApplication: {
        en: 'Storing a model\'s hyperparameter grid for tuning and keeping track of dataset column names.',
        bn: 'মডেলের বিভিন্ন প্যারামিটারের কম্বিনেশন তৈরি করা এবং কলামের নামগুলো সাজানো।',
      },
      codeExample: {
        title: 'Mastering ML Data Structures',
        language: 'python',
        code: `# 1. List of feature names
features = ["area_sqft", "bedrooms", "bathrooms", "age_years"]
features.append("distance_to_metro") # Adding a new feature

# 2. Dictionary of Model Hyperparameters
model_config = {
    "algorithm": "XGBoost",
    "n_estimators": 200,
    "max_depth": 6,
    "learning_rate": 0.05
}

# 3. Set to find unique classes
raw_labels = ["Cat", "Dog", "Cat", "Bird", "Dog", "Cat"]
unique_classes = set(raw_labels)

print("Features count:", len(features))
print("Algorithm chosen:", model_config["algorithm"])
print("Unique Classes:", sorted(list(unique_classes)))`,
        expectedOutput: `Features count: 5
Algorithm chosen: XGBoost
Unique Classes: ['Bird', 'Cat', 'Dog']`,
        explanation: {
          en: [
            'features.append() dynamically enriches our feature list.',
            'model_config provides instant O(1) key lookups for hyperparameter values.',
            'set(raw_labels) automatically deduplicated 6 labels into 3 unique classes.',
          ],
          bn: [
            'features.append() দিয়ে নতুন ফিচারের নাম তালিকায় যোগ করা হয়েছে।',
            'model_config দিয়ে মুহূর্তেই অ্যালগরিদমের নাম অ্যাক্সেস করা যায়।',
            'set() ফাংশন ডুপ্লিকেট বাদ দিয়ে মাত্র ৩টি ইউনিক ক্যাটাগরি তৈরি করেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Attempting to modify a Tuple: my_tuple[0] = 5 throws TypeError.',
            bn: 'টাপলের মান পরিবর্তন করতে চাওয়া।',
          },
          solution: {
            en: 'Tuples are immutable by design. If you need modifications, use a List instead.',
            bn: 'টাপল কখনো পরিবর্তন করা যায় না। পরিবর্তনশীল তালিকার জন্য লিস্ট [] ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Filter unique predictions', bn: 'ইউনিক প্রেডিকশন বের করুন' },
        instructions: {
          en: 'Given predictions = [1, 0, 1, 1, 2, 0, 2], find how many distinct classes were predicted.',
          bn: 'predictions তালিকা থেকে মোট কতটি ভিন্ন ভিন্ন ক্লাস রয়েছে তা সেটের সাহায্যে বের করুন।',
        },
        hint: {
          en: 'len(set(predictions)) gives the count.',
          bn: 'len(set(predictions)) ব্যবহার করুন।',
        },
      },
      nextLessonId: 'l1-functions-list-comp',
      previousLessonId: 'l1-variables-types',
    },
    {
      id: 'l1-functions-list-comp',
      levelId: 1,
      slug: 'functions-and-list-comprehension',
      title: {
        en: 'Functions, Scope, and List Comprehensions',
        bn: 'ফাংশন, স্কোপ এবং লিস্ট কম্প্রিহেনশন',
      },
      subtitle: {
        en: 'Writing modular code and transforming lists with elegant Python one-liners',
        bn: 'পুনর্ব্যবহারযোগ্য কোড তৈরি এবং এক লাইনে লিস্ট প্রসেস করার নিয়ম',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 20,
      category: 'Python Basics',
      whatIsIt: {
        en: 'Functions encapsulate reusable code logic that takes inputs (arguments) and returns outputs. List comprehensions provide a compact, fast syntax for creating new lists by transforming existing iterables.',
        bn: 'ফাংশন হলো কোডের একটি ছোট অংশ যা বারবার ব্যবহারের উপযোগী করে লেখা হয়। আর লিস্ট কম্প্রিহেনশন হলো এক লাইনে লুপ চালিয়ে নতুন লিস্ট তৈরি করার সহজ ও দ্রুততম পদ্ধতি।',
      },
      analogy: {
        en: 'A function is like a kitchen blender: you put in raw fruit (arguments), it blends them with specific blades (logic), and pours out a delicious smoothie (return value).',
        bn: 'ফাংশন হলো জুসারের মতো: আপনি ফল ইনপুট দেবেন, ভেতরে ব্লেন্ডিং লজিক চলবে এবং গ্লাসে জুস আউটপুট আসবে।',
      },
      whyItMatters: {
        en: 'In ML pipelines, functions normalize features, calculate metrics (like RMSE), and clean text. List comprehensions make batch processing 3x faster to write.',
        bn: 'এমএল-এ বিভিন্ন মেট্রিক হিসাব করা, টেক্সট ক্লিনিং এবং ব্যাচ প্রসেসিং করতে ফাংশন ও লিস্ট কম্প্রিহেনশন প্রতিদিন কাজে লাগে।',
      },
      howItWorks: {
        en: 'def function_name(arg1, arg2): ... return result. List comp syntax: [expression for item in iterable if condition].',
        bn: 'def দিয়ে ফাংশন তৈরি হয়। আর লিস্ট কম্প্রিহেনশনের গঠন: [নতুন_মান for উপাদান in লিস্ট if শর্ত]।',
      },
      practicalApplication: {
        en: 'Calculating Mean Squared Error between true prices and predicted prices.',
        bn: 'প্রকৃত দাম ও অনুমিত দামের মধ্যে গড় বর্গত্রুটি (MSE) হিসাব করা।',
      },
      codeExample: {
        title: 'Loss Calculation & List Comprehension',
        language: 'python',
        code: `# Ground truth vs Model Predictions
y_true = [100, 150, 200, 250]
y_pred = [110, 140, 210, 245]

# List comprehension: Calculate squared errors in one line!
squared_errors = [(yt - yp) ** 2 for yt, yp in zip(y_true, y_pred)]
print("Squared Errors:", squared_errors)

# Reusable Function for Mean Squared Error
def compute_mse(actual, predicted):
    errors = [(a - p) ** 2 for a, p in zip(actual, predicted)]
    return sum(errors) / len(errors)

mse = compute_mse(y_true, y_pred)
print(f"Mean Squared Error (MSE): {mse:.2f}")`,
        expectedOutput: `Squared Errors: [100, 100, 100, 25]
Mean Squared Error (MSE): 81.25`,
        explanation: {
          en: [
            'zip(y_true, y_pred) pairs up each actual value with its corresponding prediction.',
            '[(yt - yp)**2 for ...] computes all square differences in a single readable line.',
            'compute_mse averages them to yield the final loss metric.',
          ],
          bn: [
            'zip() দিয়ে প্রকৃত মান ও অনুমিত মান জোড়ায় জোড়ায় মেলানো হয়েছে।',
            'এক লাইনের লিস্ট কম্প্রিহেনশন দিয়ে প্রতিটি ভুলের বর্গ হিসাব করা হয়েছে।',
            'compute_mse ফাংশন দিয়ে গড় এরর বের করা হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Forgetting the return keyword in a function, causing it to return None silently.',
            bn: 'ফাংশনের ভেতর return লিখতে ভুলে যাওয়া, যার কারণে ফাংশনটি None আউটপুট দেয়।',
          },
          solution: {
            en: 'Always verify your functions explicitly return the computed result.',
            bn: 'ফাংশন থেকে ফলাফল পেতে সবসময় স্পষ্টভাবে return ফলাফল লিখুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Normalize scores', bn: 'নম্বর স্কেলিং করুন' },
        instructions: {
          en: 'Using list comprehension, divide every score in [70, 80, 90, 100] by 100 to scale between 0 and 1.',
          bn: 'লিস্ট কম্প্রিহেনশন ব্যবহার করে [৭০, ৮০, ৯০, ১০০] প্রতিটি সংখ্যাকে ১০০ দিয়ে ভাগ করে ০ থেকে ১ এর মধ্যে আনুন।',
        },
        hint: {
          en: '[s / 100 for s in scores]',
          bn: '[s / 100 for s in scores] লিখুন।',
        },
      },
      nextLessonId: 'l1-oop-environments',
      previousLessonId: 'l1-data-structures',
    },
    {
      id: 'l1-oop-environments',
      levelId: 1,
      slug: 'oop-pip-jupyter-notebooks',
      title: {
        en: 'Basic OOP, Pip Packages, and Jupyter Notebooks',
        bn: 'অবজেক্ট ওরিয়েন্টেড পাইথন, প্যাকেজ ও জুপিটার নোটবুক',
      },
      subtitle: {
        en: 'Understanding Scikit-Learn\'s fit()/predict() pattern and interactive notebooks',
        bn: 'Scikit-Learn এর মডেল স্ট্রাকচার এবং জুপিটার নোটবুকে দ্রুত কোড রান করার পদ্ধতি',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 25,
      category: 'Python Tooling',
      whatIsIt: {
        en: 'Object-Oriented Programming (OOP) bundles state (data) and behavior (methods) into Classes. Scikit-Learn models are classes with .fit() and .predict() methods. Jupyter Notebooks allow running code interactively cell by cell with immediate visualizations.',
        bn: 'অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) ক্লাস ও মেথডের মাধ্যমে কোডকে সুশৃঙ্খল করে। সাইকিট-লার্ন লাইব্রেরির সব অ্যালগরিদম এই ক্লাসের রূপেই তৈরি। আর জুপিটার নোটবুক হলো সেল বাই সেল কোড ও গ্রাফ দেখার চমৎকার ল্যাব।',
      },
      analogy: {
        en: 'A Class is the architectural blueprint of a house. An Object (or instance) is the actual constructed physical house. You can instantiate 10 distinct houses (models with different weights) from the same blueprint.',
        bn: 'ক্লাস হলো বাড়ির ব্লুপ্রিন্ট বা নকশা। আর অবজেক্ট হলো সেই নকশা দেখে তৈরি করা আসল বাড়ি। একই নকশা দিয়ে আপনি ভিন্ন ভিন্ন রঙের অনেকগুলো বাড়ি বানাতে পারেন।',
      },
      whyItMatters: {
        en: '99% of machine learning libraries follow the OOP estimator design pattern: model = Model(); model.fit(X, y); model.predict(X_test).',
        bn: 'মেশিন লার্নিংয়ের প্রায় সব লাইব্রেরি এই OOP প্যাটার্ন মেনে চলে: model = Algorithm(); model.fit(X, y); model.predict(new_data)।',
      },
      howItWorks: {
        en: 'Classes define __init__ constructors and internal methods. Virtual environments (venv or conda) isolate project dependencies, and pip install downloads libraries from PyPI.',
        bn: 'ক্লাসের ভেতর __init__ দিয়ে অবজেক্ট তৈরি হয়। pip install দিয়ে লাইব্রেরি ইন্সটল করা হয় এবং জুপিটার নোটবুকে কোড ইন্টারঅ্যাক্টিভভাবে টেস্ট করা যায়।',
      },
      practicalApplication: {
        en: 'Building custom data transformer classes compatible with Scikit-Learn Pipelines.',
        bn: 'সাইকিট-লার্নের পাইপলাইনের জন্য নিজস্ব কাস্টম ট্রান্সফরমার তৈরি করা।',
      },
      codeExample: {
        title: 'Building a Simple Custom ML Estimator Class',
        language: 'python',
        code: `# Understanding Scikit-Learn's Estimator API
class SimpleLinearEstimator:
    def __init__(self, multiplier=1.0):
        self.multiplier = multiplier
        self.bias = 0.0

    def fit(self, X, y):
        # Learn a simple scale factor
        self.bias = sum(y) / len(y) - self.multiplier * (sum(X) / len(X))
        print(f"Model trained! Bias calculated: {self.bias:.2f}")

    def predict(self, new_X):
        return [self.multiplier * x + self.bias for x in new_X]

# Instantiating and using our model
model = SimpleLinearEstimator(multiplier=2.5)
model.fit([1, 2, 3, 4], [2.5, 5.0, 7.5, 10.0])
predictions = model.predict([5, 10])
print("Predictions for [5, 10]:", predictions)`,
        expectedOutput: `Model trained! Bias calculated: 0.00
Predictions for [5, 10]: [12.5, 25.0]`,
        explanation: {
          en: [
            '__init__ initializes hyperparameter configurations.',
            'fit() trains the internal parameters from data.',
            'predict() uses the trained parameters to infer outcomes on new samples.',
          ],
          bn: [
            '__init__ মেথডে মডেলের সেটিংস ঠিক করা হয়।',
            'fit() মেথড দিয়ে ডেটা থেকে প্যারামিটার শেখা হয়।',
            'predict() মেথড নতুন ডেটার জন্য ফলাফল বের করে দেয়।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Calling model.predict() before calling model.fit().',
            bn: 'মডেলকে ট্রেনিং (fit) না করিয়েই সরাসরি predict() কল করা।',
          },
          solution: {
            en: 'Always fit your estimator on training features and targets first before predicting.',
            bn: 'আগে অবশ্যই model.fit(X, y) দিয়ে শেখাতে হবে, তারপর নতুন ডেটায় প্রেডিকশন করতে হবে।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Identify the Scikit-Learn steps', bn: 'সাইকিট-লার্নের ধাপগুলো চিহ্নিত করুন' },
        instructions: {
          en: 'Write down the three golden steps: 1) Instantiate; 2) Fit; 3) Predict.',
          bn: 'সাইকিট-লার্নের ৩টি মূল ধাপের নাম মনে করুন: মডেল তৈরি -> fit -> predict।',
        },
        hint: {
          en: 'model = RandomForest(); model.fit(X, y); y_pred = model.predict(X_test)',
          bn: 'মডেল ইনস্ট্যান্সিয়েট -> ফিট -> প্রেডিক্ট।',
        },
      },
      previousLessonId: 'l1-functions-list-comp',
    },
  ],
};
