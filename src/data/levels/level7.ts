import { Level } from '../../types';

export const level7: Level = {
  id: 7,
  slug: 'deep-learning',
  title: {
    en: 'Level 7 — Deep Learning Fundamentals',
    bn: 'লেভেল ৭ — ডিপ লার্নিংয়ের মূল ভিত্তি',
  },
  subtitle: {
    en: 'Perceptrons, Multi-Layer Perceptrons, Activation Functions, Backpropagation, Dropout, and BatchNorm',
    bn: 'নিউরন, অ্যাক্টিভেশন ফাংশন, ব্যাকপ্রপাগেশন, অপটিমাইজার ও ড্রপআউট',
  },
  description: {
    en: 'Unlock the mechanics of artificial neural networks. Learn how artificial neurons compute weighted sums, how non-linear activations spark representation power, and how backpropagation coordinates billions of weights with calculus.',
    bn: 'কৃত্রিম নিউরাল নেটওয়ার্কের ভেতরের রহস্য উন্মোচন করুন: কীভাবে নিউরন ইনপুট প্রসেস করে, অ্যাক্টিভেশন ফাংশন কেন প্রয়োজন এবং ব্যাকপ্রপাগেশন কীভাবে বিলিয়ন বিলিয়ন ওয়েট আপডেট করে।',
  },
  iconName: 'Network',
  color: 'from-red-500 to-amber-600',
  badge: 'Neural Networks',
  lessons: [
    {
      id: 'l7-neural-networks',
      levelId: 7,
      slug: 'neural-networks-and-perceptrons',
      title: {
        en: 'The Artificial Neuron & Multi-Layer Perceptrons (MLP)',
        bn: 'কৃত্রিম নিউরন ও মাল্টি-লেয়ার পারসেপট্রন (MLP)',
      },
      subtitle: {
        en: 'Inputs, weights, bias, and non-linear activation functions (ReLU, Sigmoid, Softmax)',
        bn: 'ইনপুট, ওয়েট, বায়াস এবং নন-লিনিয়ার অ্যাক্টিভেশন ফাংশন',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      category: 'Neural Architecture',
      whatIsIt: {
        en: 'An Artificial Neuron computes the weighted sum of its inputs plus a bias: z = Σ(w_i * x_i) + b, then passes z through a non-linear activation function f(z) like ReLU. Stacking multiple hidden layers creates a Deep Neural Network.',
        bn: 'একটি কৃত্রিম নিউরন তার সব ইনপুটের সাথে ওয়েট গুণ করে বায়াস যোগ করে: z = Σ(w_i * x_i) + b, তারপর একটি নন-লিনিয়ার অ্যাক্টিভেশন ফাংশন (যেমন ReLU)-এর ভেতর দিয়ে আউটপুট পাঠায়। একাধিক লেয়ার যুক্ত হয়ে তৈরি হয় ডিপ নিউরাল নেটওয়ার্ক।',
      },
      analogy: {
        en: 'Deciding whether to attend an outdoor music concert: You weigh factors: Ticket cost (weight: -0.8), Favorite band playing (weight: +1.5), Rainy weather forecast (weight: -1.0). If the total sum passes your personal excitation threshold (activation), you buy the ticket!',
        bn: 'বৃষ্টির দিনে বাইরে কফি খেতে যাবেন কিনা: ট্রাফিকের অবস্থা (নেতিবাচক পয়েন্ট), বন্ধুর সাথে আড্ডা (ইতিবাচক পয়েন্ট) বিবেচনা করে আপনার মস্তিষ্কের নিউরন সিদ্ধান্ত নেয়। মোট পয়েন্ট যদি একটি নির্দিষ্ট সীমার ওপরে যায়, তবে আপনি যাওয়ার সিদ্ধান্ত নেন।',
      },
      whyItMatters: {
        en: 'Without non-linear activation functions, stacking 100 linear layers collapses into just one single giant linear regression. Activations allow neural nets to approximate ANY complex mathematical function (Universal Approximation Theorem).',
        bn: 'অ্যাক্টিভেশন ফাংশন ছাড়া ১০০টি লেয়ার জুড়ে দিলেও পুরো নেটওয়ার্কটি কেবল একটি সাধারণ সরলরেখা হয়ে যেত। নন-লিনিয়ার অ্যাক্টিভেশন নিউরাল নেটওয়ার্ককে পৃথিবীর যেকোনো জটিল ফাংশন শিখতে সক্ষম করে তোলে।',
      },
      howItWorks: {
        en: 'ReLU(z) = max(0, z) is the modern default for hidden layers because it avoids vanishing gradients and calculates instantly on GPUs. Softmax is used in output layers for multi-class probabilities.',
        bn: 'হিডেন লেয়ারে আধুনিক সময়ে সবচেয়ে বেশি ব্যবহৃত হয় ReLU: max(0, z), কারণ এটি অতি দ্রুত কম্পিউট হয়। আর আউটপুট লেয়ারে মাল্টি-ক্লাসের সম্ভাবনার জন্য Softmax ব্যবহৃত হয়।',
      },
      formula: {
        expression: 'z = \\sum_{i=1}^n w_i x_i + b, \\quad a = \\text{ReLU}(z) = \\max(0, z)',
        parts: [
          { symbol: 'z', meaning: { en: 'Pre-activation linear combination (dot product + bias)', bn: 'অ্যাক্টিভেশনের আগের সরলরৈখিক যোগফল' } },
          { symbol: 'a', meaning: { en: 'Activated neuron firing output passed to the next layer', bn: 'পরবর্তী লেয়ারে পাঠানো নিউরনের অ্যাক্টিভেটেড আউটপুট' } },
        ],
      },
      practicalApplication: {
        en: 'Classifying hand-drawn digits (MNIST 0-9) from raw 28x28 grayscale image pixels.',
        bn: '২৮x২৮ পিক্সেলের হাতের লেখা সংখ্যা (০ থেকে ৯) নির্ভুলভাবে শনাক্ত করা।',
      },
      codeExample: {
        title: 'Building a Forward Pass in Pure Python / PyTorch style',
        language: 'python',
        code: `import numpy as np

# 1. Inputs (3 features, e.g. age, income, credit score)
X = np.array([0.5, 1.2, -0.8])

# 2. Hidden Layer (2 neurons, shape [3, 2])
W_hidden = np.array([
    [0.2, -0.5],
    [0.8,  0.4],
    [-0.3, 0.9]
])
b_hidden = np.array([0.1, -0.2])

# Forward pass: z = X · W + b
z = np.dot(X, W_hidden) + b_hidden
# ReLU activation: max(0, z)
a = np.maximum(0, z)

print("Pre-activation z :", np.round(z, 3))
print("Neuron activations (ReLU applied):", np.round(a, 3))`,
        expectedOutput: `Pre-activation z : [ 1.4   -0.69]
Neuron activations (ReLU applied): [1.4  0.  ]`,
        explanation: {
          en: [
            'Neuron 1 had positive z (1.40), so ReLU preserved it directly.',
            'Neuron 2 had negative z (-0.69), so ReLU zeroed it out completely (inactive neuron).',
          ],
          bn: [
            'প্রথম নিউরনের মান ধনাত্মক (১.৪) হওয়ায় ReLU সেটি হুবহু রেখেছে।',
            'দ্বিতীয় নিউরনের মান ঋণাত্মক হওয়ায় ReLU সেটিকে ০ করে দিয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Using Sigmoid in deep hidden layers, causing vanishing gradients where early layers stop learning.',
            bn: 'গভীর হিডেন লেয়ারে সিগময়েড ব্যবহার করা, যার ফলে ভ্যানিশিং গ্রেডিয়েন্টের কারণে শুরুর দিকের লেয়ারগুলো শেখা বন্ধ করে দেয়।',
          },
          solution: {
            en: 'Use ReLU or LeakyReLU for all internal hidden layers; reserve Sigmoid only for binary final output.',
            bn: 'হিডেন লেয়ারে সবসময় ReLU ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Evaluate ReLU', bn: 'রেলু ফাংশন যাচাই' },
        instructions: {
          en: 'What is ReLU(-4.5)? What is ReLU(3.2)?',
          bn: 'ReLU(-৪.৫) এর মান কত? এবং ReLU(৩.২) এর মান কত?',
        },
        hint: {
          en: 'max(0, -4.5) = 0; max(0, 3.2) = 3.2.',
          bn: 'ঋণাত্মক হলে ০, ধনাত্মক হলে সেই মানটিই থাকে।',
        },
      },
      nextLessonId: 'l7-backprop-optimizers',
    },
    {
      id: 'l7-backprop-optimizers',
      levelId: 7,
      slug: 'backpropagation-and-optimizers',
      title: {
        en: 'Backpropagation, Epochs, Batch Size & Optimizers (Adam)',
        bn: 'ব্যাকপ্রপাগেশন, ইপক, ব্যাচ সাইজ ও অ্যাডাম অপটিমাইজার',
      },
      subtitle: {
        en: 'How error gradients propagate backward through the Chain Rule to update network weights',
        bn: 'ক্যালকুলাসের চেইন রুলের সাহায্যে ত্রুটির সংকেত উল্টো দিকে পাঠিয়ে ওজন আপডেট করা',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      category: 'Deep Learning',
      whatIsIt: {
        en: 'Backpropagation computes the gradient of the loss function with respect to every weight in the network via the calculus Chain Rule. Optimizers (like Adam or SGD with Momentum) use these gradients to steer parameter updates.',
        bn: 'ব্যাকপ্রপাগেশন ক্যালকুলাসের চেইন রুলের মাধ্যমে নেটওয়ার্কের প্রতিটি ওয়েটের সাপেক্ষে ভুলের আংশিক ডেরিভেটিভ হিসাব করে। আর অ্যাডাম (Adam)-এর মতো অপটিমাইজার সেই তথ্য ব্যবহার করে গতি ও ত্বরণ বজায় রেখে ওয়েট আপডেট করে।',
      },
      analogy: {
        en: 'Imagine a relay team of 5 runners dropping the baton. Backpropagation walks backwards from runner 5 to runner 1, calculating precisely who was late and by how many centimeters, instructing each runner how to correct their positioning for the next lap.',
        bn: 'একটি নাটকের রিহার্সালে দর্শক যদি শেষ দৃশ্যে অসন্তুষ্ট হয়, তবে নির্দেশক শেষ দৃশ্য থেকে শুরু করে প্রথম দৃশ্যে কোন অভিনেতার সংলাপে ভুল ছিল তা উল্টো দিক থেকে গিয়ে চিহ্নিত করে এবং শুধরে দেয়।',
      },
      whyItMatters: {
        en: 'Backprop made training networks with millions of parameters computationally feasible in polynomial time instead of combinatorial explosion.',
        bn: 'ব্যাকপ্রপাগেশন আবিষ্কারের ফলেই লক্ষ লক্ষ প্যারামিটারের ডিপ লার্নিং মডেল মানুষের জীবদ্দশায় ট্রেনিং করা সম্ভব হয়েছে।',
      },
      howItWorks: {
        en: '1) Forward pass computes loss; 2) Backward pass applies chain rule ∂L/∂w = (∂L/∂a) * (∂a/∂z) * (∂z/∂w); 3) Adam optimizer calculates adaptive learning rates with running averages of gradients (momentum) and squared gradients.',
        bn: '১) ফরওয়ার্ড পাসে লস বের হয়; ২) ব্যাকওয়ার্ড পাসে চেইন রুল দিয়ে গ্রেডিয়েন্ট হিসাব হয়; ৩) অ্যাডাম অপটিমাইজার মোমেন্টাম ব্যবহার করে নিখুঁতভাবে প্যারামিটার আপডেট করে।',
      },
      formula: {
        expression: '\\frac{\\partial L}{\\partial w_{ij}} = \\frac{\\partial L}{\\partial z_j} \\cdot \\frac{\\partial z_j}{\\partial w_{ij}} = \\delta_j \\cdot a_i',
        parts: [
          { symbol: '\\delta_j', meaning: { en: 'Error delta propagated to layer j', bn: 'লেয়ার j-তে প্রবাহিত ভুলের সংকেত' } },
          { symbol: 'a_i', meaning: { en: 'Activation output coming from neuron i', bn: 'নিউরন i থেকে আসা অ্যাক্টিভেটেড ইনপুট' } },
        ],
      },
      practicalApplication: {
        en: 'Training large vision and transformer models using AdamW optimizer with batch sizes of 32 to 256.',
        bn: 'আধুনিক ভিশন ও ট্রান্সফরমার মডেলে AdamW অপটিমাইজার ব্যবহার করে কোটি কোটি প্যারামিটার নিখুঁতভাবে ট্রেনিং করা।',
      },
      codeExample: {
        title: 'Training Loop Mechanics: Epochs, Batches, and Loss Tracking',
        language: 'python',
        code: `# Conceptual PyTorch-style Training Loop Structure
epochs = 5
batch_size = 32
learning_rate = 0.001

print(f"Starting Training: {epochs} Epochs | Batch Size: {batch_size}")
for epoch in range(1, epochs + 1):
    epoch_loss = 1.0 / epoch # Loss decreasing over time
    epoch_acc = 0.60 + (epoch * 0.07) # Accuracy increasing
    print(f"Epoch {epoch}/{epochs} -> Loss: {epoch_loss:.3f} | Accuracy: {epoch_acc * 100:.1f}%")
print("Training Complete! Best model checkpoint saved.")`,
        expectedOutput: `Starting Training: 5 Epochs | Batch Size: 32
Epoch 1/5 -> Loss: 1.000 | Accuracy: 67.0%
Epoch 2/5 -> Loss: 0.500 | Accuracy: 74.0%
Epoch 3/5 -> Loss: 0.333 | Accuracy: 81.0%
Epoch 4/5 -> Loss: 0.250 | Accuracy: 88.0%
Epoch 5/5 -> Loss: 0.200 | Accuracy: 95.0%
Training Complete! Best model checkpoint saved.`,
        explanation: {
          en: [
            'An Epoch represents one complete full pass through the entire training dataset.',
            'Batch size determines how many samples are processed before updating weights.',
          ],
          bn: [
            'একটি ইপক (Epoch) মানে পুরো ডেটাসেট একবার পুরোপুরি পড়ে ফেলা।',
            'ব্যাচ সাইজ ঠিক করে কতগুলো ছবি বা ডেটার পর পর ওয়েট আপডেট করা হবে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Forgetting to zero gradients in custom loops (e.g. optimizer.zero_grad() in PyTorch), causing gradients to accumulate infinitely.',
            bn: 'প্রতি ব্যাচে গ্রেডিয়েন্ট রিসেট করতে ভুলে যাওয়া, যার ফলে গ্রেডিয়েন্ট ক্রমশ যোগ হয়ে বিশাল হয়ে যায়।',
          },
          solution: {
            en: 'Always clear previous step gradients before initiating loss.backward().',
            bn: 'প্রতি স্টেপে লস ব্যাকওয়ার্ড করার আগে গ্রেডিয়েন্ট পরিষ্কার করে নিন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Understand Epoch vs Batch', bn: 'ইপক বনাম ব্যাচের পার্থক্য' },
        instructions: {
          en: 'If a dataset has 1,000 images and batch_size = 50, how many batch iterations make up 1 Epoch?',
          bn: '১,০০০ ছবির ডেটাসেটে ব্যাচ সাইজ ৫০ হলে ১টি ইপক শেষ করতে কতটি ব্যাচ সম্পন্ন করতে হবে?',
        },
        hint: {
          en: '1000 / 50 = 20 batches per epoch.',
          bn: '১০০০ / ৫০ = ২০টি ব্যাচ লাগবে।',
        },
      },
      previousLessonId: 'l7-neural-networks',
    },
  ],
};
