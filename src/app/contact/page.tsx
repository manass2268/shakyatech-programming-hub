"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Sparkles, X, Code2, Rocket, ArrowRight, CheckCircle, AlertCircle 
} from 'lucide-react';

export default function ContactPage() {
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  
  // ==========================================
  // 1. Institute Form States & Logic
  // ==========================================
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [instName, setInstName] = useState('');
  const [instPhone, setInstPhone] = useState('');
  const [instEmail, setInstEmail] = useState('');
  const [instCourse, setInstCourse] = useState('');
  const [instMessage, setInstMessage] = useState('');

  const handleInstituteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await fetch("https://formsubmit.co/ajax/shakyaashwani906@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: instName,
          Email: instEmail,
          Phone: instPhone,
          Course_Interested: instCourse || 'General Enquiry',
          Message: instMessage,
          _subject: `🎓 New Student Enquiry from ${instName} - ShakyaTech`
        }),
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }

    setFormStatus('success');
    
    setTimeout(() => {
      setInstName('');
      setInstPhone('');
      setInstEmail('');
      setInstCourse('');
      setInstMessage('');
      setFormStatus('idle');
    }, 5000);
  };

  // ==========================================
  // 2. Developer Form States & Logic
  // ==========================================
  const [devFormStatus, setDevFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [devName, setDevName] = useState('');
  const [devPhone, setDevPhone] = useState('');
  const [devEmail, setDevEmail] = useState('');
  const [devPurpose, setDevPurpose] = useState('business');
  const [devDetails, setDevDetails] = useState('');

  const handleDevSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDevFormStatus('submitting');
    
    const emailSubject = devPurpose === 'error' 
      ? `🚨 Website Error Report from ${devName}`
      : `🚀 New Business/Project Inquiry from ${devName}`;

    try {
      await fetch("https://formsubmit.co/ajax/manassingh1509@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: devName,
          Email: devEmail,
          Phone: devPhone,
          Purpose: devPurpose === 'error' ? 'Reporting a Website Bug/Error' : 'New Project/Business Proposal',
          Details: devDetails,
          _subject: emailSubject,
          _cc: "support.mstech4407@gmail.com"
        }),
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }

    setDevFormStatus('success');
    
    setTimeout(() => {
      setDevName('');
      setDevPhone('');
      setDevEmail('');
      setDevPurpose('business');
      setDevDetails('');
      setDevFormStatus('idle');
      setIsDevModalOpen(false); 
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col relative font-sans">
      <Navbar />

      <div className="relative bg-[#081839] py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[80px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-yellow-500/10 blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Conversation</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Whether you're looking to enroll in our masterclasses or need technical support, our team is ready to assist you.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20 -mt-16 md:-mt-24 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#081839] mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1.5">Our Location</h4>
                    <p className="text-gray-800 font-semibold leading-relaxed">Kalyanpur, Kanpur Nagar<br/>Uttar Pradesh, India - 208001</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1.5">Phone & WhatsApp</h4>
                    <a href="tel:+917007627081" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors block text-lg">+91 70076 27081</a>
                    <p className="text-sm text-green-600 font-bold mt-0.5">Available for direct calls</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1.5">Email Address</h4>
                    <a href="mailto:shakyaashwani906@gmail.com" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors break-all">shakyaashwani906@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1.5">Calling Hours</h4>
                    <p className="text-gray-800 font-semibold">5:00 PM - 9:00 PM</p>
                    <p className="text-sm text-gray-500 mt-0.5">Monday to Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-gray-100 h-full flex flex-col relative overflow-hidden">
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin className="w-3.5 h-3.5" /> Institute Enquiry
                </div>
                <h3 className="text-2xl font-bold text-[#081839] mb-2">Send an Inquiry</h3>
                <p className="text-gray-500">Fill out the form below and our counseling team will get back to you.</p>
              </div>
              
              {formStatus === 'success' ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Registered!</h3>
                  <p className="text-gray-500 max-w-sm">Thank you for reaching out. We have received your details and our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInstituteSubmit} className="space-y-5 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                      <input type="text" value={instName} onChange={(e) => setInstName(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 text-sm" placeholder="e.g. Rahul Kumar" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                      <input type="tel" value={instPhone} onChange={(e) => setInstPhone(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 text-sm" placeholder="+91..." required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                      <input type="email" value={instEmail} onChange={(e) => setInstEmail(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 text-sm" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Enquiry For</label>
                      <select value={instCourse} onChange={(e) => setInstCourse(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-700 text-sm cursor-pointer appearance-none">
                        <option value="">General Enquiry...</option>
                        <option value="New Admission">New Admission</option>
                        <option value="C / C++ Programming">C / C++ Programming</option>
                        <option value="Java Masterclass">Java Masterclass</option>
                        <option value="Python Course">Python Course</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-grow">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Message</label>
                    <textarea rows={4} value={instMessage} onChange={(e) => setInstMessage(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 resize-none h-[120px] text-sm" placeholder="Ask your question here..." required></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-[#081839] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-auto ${formStatus === 'submitting' ? 'opacity-80' : 'hover:bg-blue-900'}`}
                  >
                    {formStatus === 'submitting' ? 'Submitting Details...' : (
                      <>Submit Enquiry <Send className="w-4 h-4 ml-1" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 w-full">
          <button 
            onClick={() => setIsDevModalOpen(true)}
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#081839] to-slate-900 p-[1px] transition-all hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#061026] rounded-2xl px-6 py-5 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden">
              <Code2 className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 text-white opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
              
              <div className="flex items-center gap-4 text-left z-10">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">Developer Support & Business</h4>
                  <p className="text-slate-400 text-sm mt-0.5">Need a custom website or found a bug? Connect directly.</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white font-semibold z-10 bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm group-hover:bg-blue-600 transition-colors">
                Contact Developer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>
      </main>
      <Footer />

      {isDevModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsDevModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20 flex flex-col">
            
            <button 
              onClick={() => setIsDevModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-gray-600 transition-colors z-20"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="relative px-6 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100/50">
              <div className="flex items-center gap-4 sm:gap-5 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-blue-600/20">
                  <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[14px] flex items-center justify-center text-blue-600 font-black text-xl sm:text-2xl">
                    MS
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 sm:mb-2">
                    <Rocket className="w-3 h-3" /> Technical Support & Business
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none mb-1 sm:mb-1.5 truncate">Manas Singh</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Full-Stack Web Developer & Designer</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {devFormStatus === 'success' ? (
                <div className="py-8 flex flex-col items-center text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500">Thanks for reaching out! I will check the details and get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleDevSubmit}>
                  <div className="space-y-1.5 mb-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <label className="text-xs font-bold text-gray-600 uppercase ml-1">How can I help you?</label>
                    <select 
                      value={devPurpose}
                      onChange={(e) => setDevPurpose(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white font-semibold cursor-pointer"
                    >
                      <option value="business">🚀 I want to build a New Project / Business</option>
                      <option value="error">🐛 I found a Bug / Error on this website</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Name</label>
                      <input type="text" value={devName} onChange={(e) => setDevName(e.target.value)} placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white transition-colors" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                      <input type="tel" value={devPhone} onChange={(e) => setDevPhone(e.target.value)} placeholder="+91..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                    <input type="email" value={devEmail} onChange={(e) => setDevEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white transition-colors" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                      {devPurpose === 'error' ? 'Describe the Error/Bug' : 'Project Details'}
                    </label>
                    <textarea 
                      rows={3} 
                      value={details} 
                      onChange={(e) => setDevDetails(e.target.value)} 
                      placeholder={devPurpose === 'error' ? "Which page has the error? What happened?" : "Briefly describe your requirements..."} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-gray-50/50 focus:bg-white resize-none transition-colors" 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={devFormStatus === 'submitting'} className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm mt-2 flex items-center justify-center gap-2 ${devFormStatus === 'submitting' ? 'opacity-80' : ''}`}>
                    {devFormStatus === 'submitting' ? 'Sending...' : (
                      <>
                        {devPurpose === 'error' ? 'Report Website Error' : 'Send Project Request'} 
                        {devPurpose === 'error' ? <AlertCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}