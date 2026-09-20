import { Level } from '../../types';

export const level2: Level = {
  id: 2,
  slug: 'mathematics-statistics',
  title: {
    en: 'Level 2 — Mathematics & Statistics for ML',
    bn: 'লেভেল ২ — গণিত ও পরিসংখ্যান (ML-এর জন্য যতটুকু দরকার)',
  },
  subtitle: {
    en: 'Linear algebra, vectors, matrices, calculus, gradients, probability, and distributions',
    bn: 'লিনিয়ার অ্যালজেব্রা, ভেক্টর, ম্যাট্রিক্স, ডেরিভেটিভ, গ্রেডিয়েন্ট ও সম্ভাবনা তত্ত্ব',
  },
  description: {
    en: 'Zero dry textbook theory. Learn only the mathematics actually required to understand ML algorithms—complete with intuitive analogies, exact formulas, symbol breakdowns, and real-world ML applications.',
    bn: 'অপ্রয়োজনীয় জটিল থিওরি বাদ দিয়ে কেবল মেশিন লার্নিংয়ের অ্যালগরিদম বুঝতে যে গণিত ও পরিসংখ্যান জানা জরুরি—সহজ ভাষা, ফর্মুলা এবং বাস্তব প্রয়োগ সহ শিখুন।',
  },
  iconName: 'Activity',
  color: 'from-amber-500 to-orange-600',
  badge: 'Essential Math',
  lessons: [
    {
      id: 'l2-vectors-matrices',
      levelId: 2,
      slug: 'vectors-and-matrices',
      title: {
        en: 'Vectors, Matrices, and Dot Products',
        bn: 'ভেক্টর, ম্যাট্রিক্স এবং ডট প্রোডাক্ট',
      },
      subtitle: {
        en: 'How datasets and neural network weights are represented mathematically',
        bn: 'ডেটাসেট ও মডেলের ওজনগুলো কীভাবে গাণিতিকভাবে সাজানো থাকে',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 25,
      category: 'Linear Algebra',
      whatIsIt: {
        en: 'A Vector is an ordered 1D array of numbers representing a single sample or direction. A Matrix is a 2D grid of numbers (rows and columns) representing an entire dataset or neural layer weights.',
        bn: 'একটি ভেক্টর হলো একসারি সংখ্যার তালিকা যা একটি ডেটা স্যাম্পল বা দিক নির্দেশ করে। আর ম্যাট্রিক্স হলো সারি ও কলামের দ্বিমাত্রিক গ্রিড, যা পুরো ডেটাসেট বা নিউরাল নেটওয়ার্কের ওজনকে উপস্থাপন করে।',
      },
      analogy: {
        en: 'Think of a single row in an Excel spreadsheet (e.g. John: 28 years old, 75kg, 180cm) as a 3D vector [28, 75, 180]. The entire Excel spreadsheet of 1,000 patients is a 1,000 x 3 Matrix!',
        bn: 'একটি এক্সেল ফাইলের একক রো (যেমন: বয়স ২৮, ওজন ৭৫, উচ্চতা ১৮০) হলো একটি ৩-উপাদানবিশিষ্ট ভেক্টর [২৮, ৭৫, ১৮০]। আর পুরো এক্সেল শিটের ১,০০০ রোগীর টেবিলটি হলো ১,০০০ x ৩ সাইজের একটি ম্যাট্রিক্স!',
      },
      whyItMatters: {
        en: 'GPUs can compute matrix dot products simultaneously in parallel hardware, allowing models to process millions of calculations per millisecond.',
        bn: 'গ্রাফিক্স কার্ড (GPU) প্যারালালভাবে ম্যাট্রিক্স গুণ করতে পারে, যার ফলে চোখের পলকে কোটি কোটি গণনা সম্পন্ন করা যায়।',
      },
      howItWorks: {
        en: 'The Dot Product multiplies corresponding elements of two vectors and sums the results: a · b = Σ(a_i * b_i). In ML, predicting y is simply the dot product of input vector X and weight vector W plus bias b: y = X · W + b.',
        bn: 'ডট প্রোডাক্ট দুটি ভেক্টরের সামঞ্জস্যপূর্ণ উপাদানগুলোকে গুণ করে যোগ করে। মেশিন লার্নিংয়ে প্রেডিকশন y হলো ইনপুট ভেক্টর X এবং ওয়েট ভেক্টর W-এর ডট প্রোডাক্ট: y = X · W + b।',
      },
      formula: {
        expression: 'y = X · W + b = \\sum_{i=1}^{n} (x_i \\cdot w_i) + b',
        parts: [
          { symbol: 'X', meaning: { en: 'Input features vector [x1, x2, ..., xn]', bn: 'ইনপুট বৈশিষ্ট্যের ভেক্টর [x1, x2, ..., xn]' } },
          { symbol: 'W', meaning: { en: 'Learned weights / coefficients vector [w1, w2, ..., wn]', bn: 'মডেলের শেখা ওজন বা কোএফিশিয়েন্ট ভেক্টর' } },
          { symbol: 'b', meaning: { en: 'Bias term (y-intercept shifting the line)', bn: 'বায়াস মান (যা রেখাটিকে উপরে বা নিচে সরায়)' } },
          { symbol: 'y', meaning: { en: 'Predicted scalar output target value', bn: 'অনুমিত চূড়ান্ত ফলাফল' } },
        ],
      },
      practicalApplication: {
        en: 'Every single artificial neuron and linear regression model computes a vector dot product as its fundamental core operation.',
        bn: 'প্রত্যেকটি নিউরাল নেটওয়ার্কের নিউরন এবং লিনিয়ার রিগ্রেশন মডেলের প্রধান ভিত্তিই হলো ভেক্টরের ডট প্রোডাক্ট।',
      },
      codeExample: {
        title: 'Dot Product using NumPy vs Python Loops',
        language: 'python',
        code: `import numpy as np

# Feature vector (e.g. [area_sqft, bedrooms])
x = np.array([1200, 3])
# Model learned weights
w = np.array([350.0, 25000.0])
bias = 40000.0

# Vectorized Dot Product in NumPy: x · w + b
predicted_price = np.dot(x, w) + bias
print(f"Predicted House Price: \${predicted_price:,.2f}")`,
        expectedOutput: `Predicted House Price: $535,000.00`,
        explanation: {
          en: [
            'np.dot(x, w) performs (1200 * 350) + (3 * 25000) = 420,000 + 75,000 = 495,000.',
            'Adding the bias 40,000 results in $535,000.',
          ],
          bn: [
            'np.dot(x, w) দিয়ে উপাদানভিত্তিক গুণ করে যোগ করা হয়েছে।',
            'বায়াস যোগ করে চূড়ান্ত অনুমিত বাড়ির দাম পাওয়া গেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Multiplying two matrices whose inner dimensions do not match (e.g. [3x2] dot [3x4] fails).',
            bn: 'প্রথম ম্যাট্রিক্সের কলাম সংখ্যা ও দ্বিতীয়টির সারি সংখ্যা না মেলালে গুণ করা যায় না।',
          },
          solution: {
            en: 'For matrix multiplication (A @ B), columns of A must equal rows of B. Use A.T (transpose) when needed.',
            bn: 'A-এর কলাম সংখ্যা B-এর রো সংখ্যার সমান হতে হবে। প্রয়োজনে A.T বা ট্রান্সপোজ ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Compute Dot Product', bn: 'ডট প্রোডাক্ট বের করুন' },
        instructions: {
          en: 'Compute dot product of a = [2, 4] and b = [3, 5]. Result is (2*3) + (4*5).',
          bn: 'a = [২, ৪] এবং b = [৩, ৫] এর ডট প্রোডাক্ট বের করুন।',
        },
        hint: {
          en: '2*3 = 6; 4*5 = 20; 6 + 20 = 26.',
          bn: '৬ + ২০ = ২৬।',
        },
      },
      quiz: [
        {
          id: 'q2-dot',
          question: {
            en: 'What is the dot product of [1, 2] and [3, 4]?',
            bn: '[১, ২] এবং [৩, ৪] ভেক্টর দুটির ডট প্রোডাক্ট কত?',
          },
          type: 'multiple_choice',
          options: [
            { id: 'a', en: '11 (1*3 + 2*4)', bn: '১১ (১*৩ + ২*৪)' },
            { id: 'b', en: '14', bn: '১৪' },
            { id: 'c', en: '24', bn: '২৪' },
          ],
          correctAnswerId: 'a',
          explanation: {
            en: '(1 * 3) + (2 * 4) = 3 + 8 = 11.',
            bn: '(১ * ৩) + (২ * ৪) = ৩ + ৮ = ১১।',
          },
        },
      ],
      nextLessonId: 'l2-derivatives-gradients',
    },
    {
      id: 'l2-derivatives-gradients',
      levelId: 2,
      slug: 'derivatives-and-gradients',
      title: {
        en: 'Derivatives & Gradients: The Compass of Learning',
        bn: 'ডেরিভেটিভ ও গ্রেডিয়েন্ট: শেখার গাণিতিক কম্পাস',
      },
      subtitle: {
        en: 'Instantaneous rate of change, slopes, and how models know which way to improve',
        bn: 'পরিবর্তনের হার, ঢাল এবং মডেল কীভাবে বোঝে কোন দিকে গেলে ভুল কমবে',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 25,
      category: 'Calculus',
      whatIsIt: {
        en: 'A Derivative measures the instantaneous rate of change (slope) of a function. A Gradient is simply a vector containing all the partial derivatives of a multivariable function, pointing directly in the direction of steepest increase.',
        bn: 'ডেরিভেটিভ (Derivative) পরিমাপ করে কোনো একটি চলকের সাপেক্ষে ফাংশনের পরিবর্তনের তাৎক্ষণিক হার বা ঢাল (Slope)। আর গ্রেডিয়েন্ট (Gradient) হলো বহু-চলকবিশিষ্ট ফাংশনের সব আংশিক ডেরিভেটিভের একটি ভেক্টর, যা সবচেয়ে খাড়া বৃদ্ধির দিক নির্দেশ করে।',
      },
      analogy: {
        en: 'Imagine standing blindfolded on a rolling hill in thick fog. If you feel the slope of the ground beneath your boots with your toe, that slope is the derivative! To reach the lowest valley (minimum error), you take steps in the exact opposite direction of the uphill slope.',
        bn: 'কুয়াশায় ঘেরা পাহাড়ে দাঁড়িয়ে আপনি পায়ের পাতা দিয়ে যে ঢাল অনুভব করেন, সেটিই হলো ডেরিভেটিভ। সবচেয়ে নিচের উপত্যকায় (সর্বনিম্ন ভুল) নামতে হলে ঢাল যেদিকে উঠছে তার ঠিক উল্টো দিকে পা বাড়াতে হয়।',
      },
      whyItMatters: {
        en: 'Without derivatives, models would have to guess randomly among billions of weights. Gradients mathematically tell the model whether increasing weight w will decrease error.',
        bn: 'ডেরিভেটিভ ছাড়া কম্পিউটারকে কোটি কোটি ওজনের মান আন্দাজে পরীক্ষা করতে হতো। গ্রেডিয়েন্ট ঠিক বলে দেয় কোন ওয়েট বাড়ালে বা কমালে ভুল কমে যাবে।',
      },
      howItWorks: {
        en: 'We calculate the derivative of the Loss function with respect to each weight: ∂Loss / ∂w. We then update: w_new = w_old - learning_rate * (∂Loss / ∂w).',
        bn: 'আমরা লস ফাংশনের আংশিক ডেরিভেটিভ (∂Loss / ∂w) বের করি। তারপর ওয়েট থেকে লার্নিং রেট গুণ করে সেই ঢাল বিয়োগ করি।',
      },
      formula: {
        expression: '\\nabla L(w) = \\frac{\\partial L}{\\partial w}, \\quad w_{new} = w_{old} - \\eta \\cdot \\nabla L(w)',
        parts: [
          { symbol: '\\nabla L(w)', meaning: { en: 'Gradient vector of the loss function L with respect to weights w', bn: 'ওয়েট w-এর সাপেক্ষে লস ফাংশনের গ্রেডিয়েন্ট ভেক্টর' } },
          { symbol: '\\eta (eta)', meaning: { en: 'Learning rate (step size multiplier)', bn: 'লার্নিং রেট (ধাপের আকার নির্ধারণকারী সংখ্যা)' } },
          { symbol: 'w_{new}', meaning: { en: 'Updated improved weight value after taking the downhill step', bn: 'উন্নত নতুন ওয়েট মান' } },
        ],
      },
      practicalApplication: {
        en: 'Backpropagation in Deep Learning is 100% powered by the Chain Rule of calculus computing gradients layer by layer.',
        bn: 'ডিপ লার্নিংয়ের ব্যাকপ্রপাগেশন পুরোপুরি ক্যালকুলাসের চেইন রুল ও গ্রেডিয়েন্টের ওপর প্রতিষ্ঠিত।',
      },
      codeExample: {
        title: 'Calculating Slope and Updating a Weight',
        language: 'python',
        code: `# Let Loss function be: L(w) = (w - 3)^2
# Mathematical derivative: dL/dw = 2 * (w - 3)

w = 10.0 # Starting far from the optimum w=3
learning_rate = 0.1

print(f"Starting weight: {w:.2f} | Initial Loss: {(w-3)**2:.2f}")

for step in range(1, 11):
    gradient = 2 * (w - 3) # Derivative
    w = w - learning_rate * gradient # Gradient Descent Step
    loss = (w - 3) ** 2
    if step in [1, 3, 5, 10]:
        print(f"Step {step:02d}: w = {w:.4f} | Loss = {loss:.4f}")`,
        expectedOutput: `Starting weight: 10.00 | Initial Loss: 49.00
Step 01: w = 8.6000 | Loss = 31.3600
Step 03: w = 6.5840 | Loss = 12.8451
Step 05: w = 5.2938 | Loss = 5.2613
Step 10: w = 3.7518 | Loss = 0.5652`,
        explanation: {
          en: [
            'At w=10, the gradient is +14 (slope points uphill to the right).',
            'Subtracting the gradient steps leftward toward the minimum at w=3.0.',
            'By step 10, loss shrank from 49.0 down to 0.56!',
          ],
          bn: [
            'w=১০ এ ঢাল ধনাত্মক, তাই বিয়োগ করার ফলে w বামের দিকে ৩ এর কাছাকাছি যেতে থাকে।',
            '১০ ধাপের মধ্যেই লস ৪৯ থেকে কমে ০.৫৬ এ নেমে এসেছে!',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Setting the learning rate too huge (e.g. eta = 5.0), causing weights to explode to infinity.',
            bn: 'লার্নিং রেটের মান অনেক বড় রাখা, যার ফলে মডেল সর্বনিম্ন পয়েন্ট অতিক্রম করে ছিটকে যায়।',
          },
          solution: {
            en: 'Start with small learning rates like 0.001 or 0.01 and use adaptive optimizers (like Adam).',
            bn: 'লার্নিং রেট ছোট (যেমন ০.০১ বা ০.০০১) রাখা উচিত।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Check gradient at minimum', bn: 'ন্যূনতম বিন্দুতে ঢাল যাচাই' },
        instructions: {
          en: 'If Loss = (w - 4)^2, what is the derivative dL/dw when w = 4?',
          bn: 'w = ৪ হলে (w - ৪)^২ এর ডেরিভেটিভ কত হবে?',
        },
        hint: {
          en: '2 * (4 - 4) = 0. At the exact bottom of the valley, the slope is flat (0)!',
          bn: '২ * (৪ - ৪) = ০। উপত্যকার একদম নিচে ঢাল শূন্য হয়।',
        },
      },
      nextLessonId: 'l2-statistics-probability',
      previousLessonId: 'l2-vectors-matrices',
    },
    {
      id: 'l2-statistics-probability',
      levelId: 2,
      slug: 'statistics-mean-variance-bayes',
      title: {
        en: 'Statistics & Probability: Mean, Variance, Correlation, and Bayes\' Theorem',
        bn: 'পরিসংখ্যান ও সম্ভাবনা: গড়, ভেদাঙ্ক, সংশ্লেষ ও বেইসের উপপাদ্য',
      },
      subtitle: {
        en: 'Central tendency, data spread, correlation vs causation, and conditional probability',
        bn: 'ডেটার বিস্তৃতি, সহসম্বন্ধ এবং পূর্ব জ্ঞানের ওপর ভিত্তি করে নতুন সম্ভাবনা নির্ণয়',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 30,
      category: 'Probability & Stats',
      whatIsIt: {
        en: 'Statistics describes patterns and variability in historical data (Mean, Median, Variance, Standard Deviation, Correlation). Probability quantifies future uncertainty and conditional belief updates (Bayes\' Theorem).',
        bn: 'পরিসংখ্যান ডেটাসেটের বৈশিষ্ট্য (গড়, মধ্যক, ভেদাঙ্ক, সম্পর্ক) পরিমাপ করে। আর সম্ভাবনা তত্ত্ব ভবিষ্যৎ অনিশ্চয়তা ও শর্তযুক্ত সম্ভাব্যতা (Bayes\' Theorem) গাণিতিকভাবে প্রকাশ করে।',
      },
      analogy: {
        en: 'If 9 out of 10 people in a room have an average salary of $50k, but Bill Gates walks in, the Mean jumps to $100M while the Median remains $50k! This is why Median is robust to extreme outliers.',
        bn: 'একটি ঘরে ৯ জন সাধারণ চাকুরিজীবী (গড় আয় ৫০ হাজার টাকা) বসে আছেন। হঠাৎ সেখানে বিল গেটস প্রবেশ করলেন। এখন গড় আয় কোটি টাকা হয়ে যাবে, কিন্তু মধ্যক (Median) ঠিকই ৫০ হাজার থাকবে! এজন্য আউটলায়ার থাকলে মিডিয়ান বেশি নির্ভরযোগ্য।',
      },
      whyItMatters: {
        en: 'Variance tells if features need scaling. Correlation reveals redundant duplicate features. Bayes\' Theorem powers spam filters and medical diagnostics.',
        bn: 'ভ্যারিয়েন্স ডেটার বিস্তৃতি বোঝায়, কোরিলেশন অপ্রয়োজনীয় কলাম বাদ দিতে সাহায্য করে এবং বেইসের উপপাদ্য স্প্যাম ফিল্টারিংয়ের মূল ভিত্তি।',
      },
      howItWorks: {
        en: 'Mean = Σx / N. Variance = Σ(x - μ)^2 / N. Bayes\' Theorem: P(A|B) = P(B|A) * P(A) / P(B).',
        bn: 'গড় হলো সব সংখ্যার যোগফল ভাগ মোট সংখ্যা। ভেদাঙ্ক (Variance) হলো গড় থেকে প্রতিটি মানের দূরত্বের বর্গের গড়। বেইসের উপপাদ্য শর্তসাপেক্ষ সম্ভাবনা হিসাব করে।',
      },
      formula: {
        expression: 'P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}, \\quad \\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}}',
        parts: [
          { symbol: 'P(A|B)', meaning: { en: 'Posterior probability of event A occurring given evidence B has occurred', bn: 'প্রমাণ B পাওয়ার পর ঘটনা A ঘটার সম্ভাবনা' } },
          { symbol: 'P(A)', meaning: { en: 'Prior probability of A before seeing new evidence', bn: 'নতুন প্রমাণ দেখার আগে A-এর সাধারণ সম্ভাবনা' } },
          { symbol: '\\sigma (sigma)', meaning: { en: 'Standard deviation (average spread of data points around mean)', bn: 'পরিমিত ব্যবধান (গড় থেকে ডেটা পয়েন্টগুলোর স্বাভাবিক বিস্তৃতি)' } },
        ],
      },
      practicalApplication: {
        en: 'Naive Bayes text classifiers calculating the probability that an email is spam given words like "lottery" and "winner".',
        bn: 'নাইভ বেইস ক্লাসিফায়ার দিয়ে ইমেইলে "লটারি", "ফ্রি" শব্দ থাকলে সেটি স্প্যাম হওয়ার সম্ভাবনা বের করা।',
      },
      codeExample: {
        title: 'Summary Statistics with NumPy & Pandas',
        language: 'python',
        code: `import numpy as np

# Monthly housing prices in thousand dollars
prices = np.array([250, 260, 270, 265, 255, 1200]) # 1200 is an outlier!

mean_val = np.mean(prices)
median_val = np.median(prices)
std_val = np.std(prices)

print(f"Mean Price:   \${mean_val:.1f}k (Distorted by outlier)")
print(f"Median Price: \${median_val:.1f}k (Resistant to outlier!)")
print(f"Std Dev:      \${std_val:.1f}k (High dispersion)")`,
        expectedOutput: `Mean Price:   $425.0k (Distorted by outlier)
Median Price: $262.5k (Resistant to outlier!)
Std Dev:      $346.7k (High dispersion)`,
        explanation: {
          en: [
            'The single luxury estate ($1,200k) pulled the mean up from ~260 to 425.',
            'The median remained at 262.5, accurately representing typical neighborhood homes.',
          ],
          bn: [
            'একটিমাত্র চরম আউটলায়ার (১২০০) গড় দামকে অনেক বাড়িয়ে দিয়েছে।',
            'কিন্তু মিডিয়ান ২৬২.৫ এ স্থিতিশীল থেকে সাধারণ বাড়ির আসল চিত্র তুলে ধরেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Confusing correlation with causation: e.g. ice cream sales correlate with drowning deaths (both driven by summer weather).',
            bn: 'কোরিলেশনকে সরাসরি কারণ মনে করা (যেমন: গরমে আইসক্রিম বিক্রি ও নদীতে সাঁতার কাটার সংখ্যা উভয়ই বাড়ে, কিন্তু একটি আরেকটির কারণ নয়)।',
          },
          solution: {
            en: 'Always search for confounding hidden variables before drawing causal conclusions.',
            bn: 'দুটি বিষয়ের মধ্যে মিল পেলেই একটি অন্যটির কারণ এমন সিদ্ধান্ত নেওয়া যাবে না।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Choose Mean vs Median', bn: 'গড় বনাম মধ্যক নির্বাচন' },
        instructions: {
          en: 'For employee salaries at a tech company where the CEO earns $50M while 500 engineers earn $100k, should you report Mean or Median?',
          bn: 'যে কোম্পানিতে ৫০০ জন ইঞ্জিনিয়ারের বেতন ১ লাখ টাকা আর সিইও-এর বেতন ৫০ কোটি টাকা, সেখানে মধ্যক বেশি উপযুক্ত নাকি গড়?',
        },
        hint: {
          en: 'Use Median to avoid skewness caused by extreme outliers.',
          bn: 'আউটলায়ার থাকলে মধ্যক (Median) ব্যবহার করাই যুক্তিযুক্ত।',
        },
      },
      previousLessonId: 'l2-derivatives-gradients',
    },
  ],
};
