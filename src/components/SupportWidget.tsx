"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send, AlertCircle, Code2, CheckCircle } from 'lucide-react';

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('feedback');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const emailSubject = purpose === 'error' 
      ? `🚨 BUG REPORT: Website Error from ${name}`
      : purpose === 'business'
      ? `🚀 BUSINESS: New Project Request from ${name}`
      : `💡 FEEDBACK: Website Feedback from ${name}`;

    try {
      await fetch("https://formsubmit.co/ajax/manassingh1509@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          purpose: purpose,
          message: details,
          _subject: emailSubject,
          _cc: "support.mstech4407@gmail.com",
          _replyto: email, // Force reply to user's email
          _autoresponse: `Hello ${name},\n\nThank you for reaching out to MS Tech Support!\n\nWe have successfully received your message regarding your ${purpose === 'error' ? 'website bug report' : purpose === 'business' ? 'project inquiry' : 'feedback'}. \n\nOur developer team will review your details and get back to you as soon as possible.\n\nBest Regards,\nMS Tech Support Team\nsupport.mstech4407@gmail.com`
        }),
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }

    setFormStatus('success');
    
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setPurpose('feedback');
      setDetails('');
      setFormStatus('idle');
      setIsOpen(false); 
    }, 4000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40 hover:-translate-y-1 transition-all group"
        aria-label="Support & Feedback"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Support & Feedback
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md max-h-[95vh] overflow-y-auto rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20 flex flex-col">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-gray-600 transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative px-6 pt-8 pb-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100/50">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-lg">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">Developer Support</h3>
                  <p className="text-xs font-medium text-gray-500">Report Bugs, Feedback or Business</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {formStatus === 'success' ? (
                <div className="py-6 flex flex-col items-center text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500">Thank you! Our technical team will look into this immediately.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  
                  <div className="space-y-1.5 mb-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <label className="text-xs font-bold text-gray-600 uppercase ml-1">How can we help?</label>
                    <select 
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white font-semibold cursor-pointer"
                    >
                      <option value="feedback">💬 I want to give general Feedback</option>
                      <option value="error">🐛 I found a Bug / Website Error</option>
                      <option value="business">🚀 I need a Custom Website / Business</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Phone</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white" required />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white" required />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">
                      {purpose === 'error' ? 'Describe the Error' : purpose === 'business' ? 'Project Details' : 'Your Feedback'}
                    </label>
                    <textarea 
                      rows={3} 
                      value={details} 
                      onChange={(e) => setDetails(e.target.value)} 
                      placeholder={purpose === 'error' ? "Which page? What happened?" : "Type your message here..."} 
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white resize-none" 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={formStatus === 'submitting'} className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-600/20 text-sm mt-2 flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'opacity-80' : ''}`}>
                    {formStatus === 'submitting' ? 'Sending...' : (
                      <>
                        {purpose === 'error' ? 'Report Bug' : purpose === 'business' ? 'Send Request' : 'Submit Feedback'} 
                        {purpose === 'error' ? <AlertCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}