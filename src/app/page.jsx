"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">ペットパラダイス</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-200 transition duration-300 ease-in-out">
                  当店について
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-200 transition duration-300 ease-in-out">
                  商品・サービス
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200 transition duration-300 ease-in-out">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-down">
              愛するペットのための最高の選択
            </h2>
            <p className="text-2xl mb-10 max-w-2xl mx-auto">あなたのペットに幸せと健康を</p>
            <a
              href="#contact"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              当店について
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              ペットパラダイスは、愛するペットのための最高品質の商品とサービスを提供しています。私たちは、ペットの健康と幸せを第一に考え、飼い主様とペットの絆を深めるお手伝いをいたします。豊富な経験と専門知識を活かし、あなたのペットに最適な商品選びをサポートします。
            </p>
          </div>
        </section>

        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">商品・サービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">ペットフード</h3>
                <p className="text-gray-700 leading-relaxed">
                  高品質で栄養バランスの取れたペットフードを各種取り揃えています。年齢や健康状態に合わせた最適な食事をご提案します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">ペット用品</h3>
                <p className="text-gray-700 leading-relaxed">
                  おもちゃ、ベッド、首輪など、ペットの快適な生活に必要なアイテムを豊富に取り揃えています。安全性と品質にこだわった商品を提供します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">グルーミングサービス</h3>
                <p className="text-gray-700 leading-relaxed">
                  プロのグルーマーによる高品質なトリミングサービスを提供しています。ペットの健康と美しさを保つお手伝いをいたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              お問い合わせ
            </h2>
            <form className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="お名前"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="メッセージ"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 h-40"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                送信
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 ペットパラダイス. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              利用規約
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;